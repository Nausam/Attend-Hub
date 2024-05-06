import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDesignation } from "@/lib/database/models/designation.model";
import { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";

import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import {
  createDesignation,
  getAllDesignations,
} from "@/lib/actions/designation.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [designations, setDesignations] = useState<IDesignation[]>([]);
  const [newDesignation, setNewDesignation] = useState("");

  const handleAddDesignation = () => {
    createDesignation({
      designationName: newDesignation.trim(),
    }).then((designations) => {
      setDesignations((prevState) => [...prevState, designations]);
    });
  };

  useEffect(() => {
    const getDesignations = async () => {
      const designationList = await getAllDesignations();

      designationList && setDesignations(designationList as IDesignation[]);
    };

    getDesignations();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Designation" />
      </SelectTrigger>
      <SelectContent className="dark:bg-darkBlue_2">
        {designations.length > 0 &&
          designations.map((designation) => (
            <SelectItem
              key={designation._id}
              value={designation._id}
              className="select-item p-regular-14 dark:text-white dark:hover:bg-lighteBlue_1"
            >
              {designation.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500 dark:bg-darkBlue_2">
            Add new Designation
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white dark:bg-darkBlue_2">
            <AlertDialogHeader>
              <AlertDialogTitle>New Designation</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Designation"
                  className="input-field mt-3"
                  onChange={(e) => setNewDesignation(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddDesignation)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;

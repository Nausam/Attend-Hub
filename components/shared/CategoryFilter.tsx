"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllDesignations } from "@/lib/actions/designation.actions";
import { IDesignation } from "@/lib/database/models/designation.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [designations, setDesignations] = useState<IDesignation[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getDesignations = async () => {
      const designationList = await getAllDesignations();

      designationList && setDesignations(designationList as IDesignation[]);
    };

    getDesignations();
  }, []);

  const onSelectDesignation = (designation: string) => {
    let newUrl = "";

    if (designation && designation !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "designation",
        value: designation,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["designation"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectDesignation(value)}>
      <SelectTrigger className="select-field dark:text-black">
        <SelectValue placeholder="Search by designation" />
      </SelectTrigger>
      <SelectContent className="dark:bg-[#191919]">
        <SelectItem
          value="All"
          className="select-item p-regular-14 dark:bg-[#191919] dark:text-white dark:hover:bg-[#252525]"
        >
          All
        </SelectItem>

        {designations.map((designation) => (
          <SelectItem
            value={designation.name}
            key={designation._id}
            className="select-item p-regular-14 dark:text-white dark:bg-[#191919] dark:hover:bg-[#252525] z-50"
          >
            {designation.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;

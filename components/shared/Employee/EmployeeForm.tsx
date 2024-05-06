"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { employeeLeaveSchema } from "@/lib/validator";
import { employeeDefaultValues } from "@/constants";
import Dropdown from "../Dropdown";
import { FileUploader } from "../FileUploader";
import { useState } from "react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { createEmployee } from "@/lib/actions/employee.actions";
import { IEmployee } from "@/lib/database/models/employee.model";

import { Switch } from "@/components/ui/switch";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "@/components/ui/use-toast";

type EmployeeFormProps = {
  userId: string;
  type: "Create" | "Update";
  employee?: IEmployee;
  employeeId?: string;
};

const EmployeeForm = ({
  userId,
  type,
  employee,
  employeeId,
}: EmployeeFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [productCounter, setProductCounter] = useState(0);

  const initialValues =
    employee && type === "Update"
      ? {
          ...employee,
        }
      : employeeDefaultValues;

  const { startUpload } = useUploadThing("imageUploader");

  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof employeeLeaveSchema>>({
    resolver: zodResolver(employeeLeaveSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof employeeLeaveSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) return;

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newEmployee = await createEmployee({
          employee: {
            ...values,
            imageUrl: uploadedImageUrl,
          },
          userId,
          path: "/",
        });
        if (newEmployee) {
          form.reset();
          router.push(`/employess/${newEmployee._id}`);
        }
        toast({
          title: `${values.lastName} created successfully`,
        });
      } catch (error) {
        toast({
          title: `Error creating ${values.lastName}`,
          variant: "destructive",
        });
      }
    }

    // if (type === "Update") {
    //   if (!tournamentId) {
    //     router.back();
    //     return;
    //   }

    //   try {
    //     const updatedTournament = await updateTournament({
    //       userId,
    //       tournament: {
    //         ...values,
    //         imageUrl: uploadedImageUrl,
    //         _id: tournamentId,
    //       },
    //       path: `/tournaments/${tournamentId}}`,
    //     });
    //     if (updatedTournament) {
    //       form.reset();
    //       router.push(`/tournaments/${updatedTournament._id}`);
    //     }
    //     toast({
    //       title: `${values.title} updated successfully`,
    //     });
    //   } catch (error) {
    //     toast({
    //       title: `Error updating ${values.title}`,
    //       variant: "destructive",
    //     });
    //   }
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="designationId"
            render={({ field }) => (
              <FormItem className="w-full dark:bg-darkBlue_2 rounded-full text-black">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row ">
          <FormField
            control={form.control}
            name="recordCardNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Record Card Number"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="sickLeave"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Sick Leave"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="annualLeave"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Annual Leave"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="familyRelatedLeave"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Family Related Leave"
                    {...field}
                    className="textarea rounded-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="joinedDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-sm bg-grey-50 dark:bg-lighteBlue_1 px-4 py-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="price"
                      width={24}
                      height={24}
                    />
                    <p className="ml-3 whitespace-nowrap "> Start Date:</p>

                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={"MM/dd/yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                      className="cursor-pointer"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="button bg-black border border-black hover:bg-transparent text-white hover:text-black dark:bg-white dark:border-black dark:hover:border-white dark:text-black dark:hover:bg-transparent dark:hover:text-white  font-bold w-full sm:w-fit transition-all duration-300 ease-in-out shadow-lg"
          >
            {form.formState.isSubmitting
              ? "Submitting..."
              : `${type} Tournament `}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeForm;

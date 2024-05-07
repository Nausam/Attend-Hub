import Collection from "@/components/shared/Collection";
import { getEmployeeById } from "@/lib/actions/employee.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";
import { auth } from "@clerk/nextjs";
import { formatDateTime } from "@/lib/utils";

const EmployeeDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const employee = await getEmployeeById(id);

  const joinedDate = formatDateTime(employee.joinedDate);

  return (
    <>
      <section className="flex justify-center md:mt-16 mt-20">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2  2xl:max-w-7xl sm:py-10 items-center">
          <Image
            src={employee.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-sm"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">
                {" "}
                {employee.firstName} {employee.lastName}{" "}
              </h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-medium-16 rounded-sm bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {employee.designation.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Joined Date
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {joinedDate.dateOnly}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Record Card Number
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.recordCardNumber}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Sick Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.sickLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Annual Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.annualLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Family Related Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.familyRelatedLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Emergency Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.emergencyLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Maternity Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.maternityLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                Paternity Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.paternityLeave}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600 dark:text-gray-300">
                No Pay Leave
              </p>

              <p className="p-medium-16 lg:p-medium-18 text-gray-500 dark:text-gray-400">
                {employee.noPayLeave}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeDetails;

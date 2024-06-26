import { IEmployee } from "@/lib/database/models/employee.model";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  employee: IEmployee;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ employee, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEmployeeCreator =
    employee && employee.creator && employee.creator._id === userId;
  // const isProductCreator = product.creator._id === userId.toString();

  return (
    <div className="relative flex w-full flex-col">
      <div className="flex flex-col p-5 gap-5">
        <Link href={`/employees/${employee._id}`}>
          <Image
            src={employee.imageUrl}
            width={200}
            height={100}
            alt="product image"
            className="flex-1 rounded-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-5">
          {isEmployeeCreator && !hidePrice && (
            <div className="absolute left-2 top-2 flex flex-col gap-4 rounded-sm bg-white dark:bg-[#252525] p-2 shadow-sm transition-all">
              <Link href={`/employees/${employee._id}/update`}>
                <Image
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={20}
                  height={20}
                />
              </Link>

              {/* <DeleteConfirmation productId={product._id} /> */}
            </div>
          )}

          <div className="flex flex-col items-center gap-3">
            <Link href={`/tournaments/${employee._id}`}>
              <p className="p-medium-16 text-black dark:text-gray-300">
                {employee.firstName} {employee.lastName}
              </p>
            </Link>

            <div className="flex-center">
              <div className="">
                <div className="flex gap-2">
                  <p className="p-semibold-14 w-fit rounded-sm bg-grey-500/10 py-2 px-4 text-grey-500 flex-center dark:text-gray-400">
                    {employee.designation.name}
                  </p>
                </div>
              </div>

              {/* <p className="mt-8 w-60 text-gray-400 flex-center">
              {product.description}
            </p> */}

              {hasOrderLink && (
                <Link
                  href={`/orders?eventId=${employee._id}`}
                  className="flex mt-5 "
                >
                  <p className="text-primary-500">Order Details</p>
                  <Image
                    src="/assets/icons/arrow.svg"
                    alt="search"
                    width={10}
                    height={10}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

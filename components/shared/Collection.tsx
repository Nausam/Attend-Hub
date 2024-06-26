import { Suspense } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { IEmployee } from "@/lib/database/models/employee.model";

type CollectionProps = {
  data: IEmployee[];
  emptyTitle: string;
  emptyStateSubtext: string;
  homePage?: boolean;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Products_Created" | "My_Products" | "All_Products";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  homePage = false,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {data.length > 0 ? (
          <div className="flex-center flex-col gap-10 ">
            <ul className="flex-center w-full flex-wrap gap-5 xl:gap-10">
              {data.map((employee, index) => {
                const hasOrderLink = collectionType === "My_Products";
                const hidePrice = collectionType === "My_Products";

                return (
                  <li key={index} className="flex justify-center">
                    <Card
                      employee={employee}
                      hasOrderLink={hasOrderLink}
                      hidePrice={hidePrice}
                    />
                  </li>
                );
              })}
            </ul>

            {!homePage === true && totalPages > 1 && (
              <Pagination
                urlParamName={urlParamName}
                page={page}
                totalPages={totalPages}
              />
            )}
          </div>
        ) : (
          <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-sm bg-grey-50 dark:bg-darkBlue_2 py-28 text-center ">
            <h3 className="p-bold-20 md:h5-bold dark:text-gray-300">
              {" "}
              {emptyTitle}{" "}
            </h3>
            <p className="p-regular-14 dark:text-gray-400">
              {" "}
              {emptyStateSubtext}{" "}
            </p>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default Collection;

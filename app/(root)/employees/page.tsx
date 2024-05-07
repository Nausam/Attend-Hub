import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { getAllEmployees } from "@/lib/actions/employee.actions";
import { SearchParamProps } from "@/types";

export default async function Store({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const designation = (searchParams?.designation as string) || "";

  const employees = await getAllEmployees({
    query: searchText,
    designation: designation,
    page,
    limit: 3,
  });

  return (
    <>
      <section
        id="products"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 mt-20"
      >
        <h2 className="h2-bold">Shop</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
      </section>

      <section className="wrapper my-8 items-center justify-center flex gap-8 md:gap-12">
        <Collection
          data={employees?.data}
          emptyTitle="No employees found"
          emptyStateSubtext="Come back later"
          collectionType="All_Products"
          limit={3}
          homePage={false}
          page={page}
          totalPages={employees?.totalPages}
        />
      </section>
    </>
  );
}

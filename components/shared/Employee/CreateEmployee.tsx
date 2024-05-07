import React from "react";

import { auth } from "@clerk/nextjs";
import EmployeeForm from "./EmployeeForm";

const CreateEmployee = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section>
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Employee
        </h3>
      </section>

      <div className="wrapper my-8">
        <EmployeeForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEmployee;

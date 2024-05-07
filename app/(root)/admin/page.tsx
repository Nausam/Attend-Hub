import { Suspense } from "react";
import { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateEmployee from "@/components/shared/Employee/CreateEmployee";

const AdminPage = () => {
  return (
    <div className="wrapper mt-20">
      <Tabs defaultValue="edit">
        <TabsList className="dark:bg-lighteBlue_1">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <Suspense
            fallback={
              <div className="flex items-center justify-center">Loading...</div>
            }
          >
            Your Component Here
          </Suspense>
        </TabsContent>
        <TabsContent value="create">
          <CreateEmployee />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;

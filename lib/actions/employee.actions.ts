"use server";

import { CreateEmployeeParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Employee from "../database/models/employee.model";
import Designation from "../database/models/designation.model";
import { revalidatePath } from "next/cache";

const getDesignationByName = async (name: string) => {
  return Designation.findOne({ name: { $regex: name, $options: "i" } });
};

const populateEmployee = async (query: any) => {
  return query
    .populate({
      path: "creator",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({
      path: "designation",
      model: Designation,
      select: "_id name",
    });
};

// CREATE
export const createEmployee = async ({
  employee,
  userId,
  path,
}: CreateEmployeeParams) => {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    const newEmployee = await Employee.create({
      ...employee,
      designation: employee.designationId,
      creator: userId,
    });

    return JSON.parse(JSON.stringify(newEmployee));
  } catch (error) {
    handleError(error);
  }
};

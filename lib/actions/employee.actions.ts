"use server";

import { CreateEmployeeParams, GetAllEmployeesParams } from "@/types";
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

// GET EMPLOYEE BY ID
export const getEmployeeById = async (employeeId: string) => {
  try {
    await connectToDatabase();

    const employee = await populateEmployee(Employee.findById(employeeId));

    if (!employee) {
      throw new Error("Employee not found");
    }

    return JSON.parse(JSON.stringify(employee));
  } catch (error) {
    handleError(error);
  }
};

// GET ALL EMPLOYEES
export const getAllEmployees = async ({
  query,
  limit = 6,
  page,
  designation,
}: GetAllEmployeesParams) => {
  try {
    await connectToDatabase();

    const nameCondition = query
      ? { lastName: { $regex: query, $options: "i" } }
      : {};
    const designationCondition = designation
      ? await getDesignationByName(designation)
      : null;

    const conditions = {
      $and: [
        nameCondition,
        designationCondition ? { designation: designationCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const employeeQuery = Employee.find(conditions)
      .sort({
        createdAt: "desc",
      })
      .skip(skipAmount)
      .limit(limit);

    const employees = await populateEmployee(employeeQuery);
    const employeesCount = await Employee.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(employees)),
      totalPages: Math.ceil(employeesCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

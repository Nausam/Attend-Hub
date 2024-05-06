"use server";

import { CreateDesignationParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Designation from "../database/models/designation.model";

export const createDesignation = async ({
  designationName,
}: CreateDesignationParams) => {
  try {
    await connectToDatabase();

    const newDesignation = await Designation.create({ name: designationName });

    return JSON.parse(JSON.stringify(newDesignation));
  } catch (error) {
    handleError(error);
  }
};

export const getAllDesignations = async () => {
  try {
    await connectToDatabase();

    const designations = await Designation.find();

    return JSON.parse(JSON.stringify(designations));
  } catch (error) {
    handleError(error);
  }
};

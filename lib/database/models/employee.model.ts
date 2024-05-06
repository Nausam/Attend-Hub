import { Document, Schema, model, models } from "mongoose";

export interface IEmployee extends Document {
  _id: string;
  firstName: string;
  createdAt: Date;
  lastName: string;
  imageUrl: string;
  recordCardNumber: string;
  sickLeave: string;
  annualLeave: string;
  familyRelatedLeave: string;
  emergencyLeave: string;
  maternityLeave: string;
  paternityLeave: string;
  hithaaneeLeave: string;
  officialLeave: string;
  noPayLeave: string;
  joinedDate: Date;
  designation: { _id: string; name: string };
  creator: { _id: string; firstName: string; lastName: string };
}

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imageUrl: { type: String },
  recordCardNumber: { type: String },
  sickLeave: { type: String },
  annualLeave: { type: String },
  familyRelatedLeave: { type: String },
  emergencyLeave: { type: String },
  maternityLeave: { type: String },
  paternityLeave: { type: String },
  hithaaneeLeave: { type: String },
  officialLeave: { type: String },
  noPayLeave: { type: String },
  joinedDate: { type: Date, default: Date.now },
  designation: { type: Schema.Types.ObjectId, ref: "Designation" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
});

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;

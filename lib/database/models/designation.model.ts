import { Document, Schema, model, models } from "mongoose";

export interface IDesignation extends Document {
  _id: string;
  name: string;
}

const DesignationSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Designation =
  models.Designation || model("Designation", DesignationSchema);

export default Designation;

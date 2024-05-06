import * as z from "zod";

export const employeeLeaveSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  imageUrl: z.string(),
  recordCardNumber: z.string().min(1, "Record card number is required"),
  sickLeave: z.string().min(0, "Sick leave count cannot be negative"),
  annualLeave: z.string().min(0, "Annual leave count cannot be negative"),
  familyRelatedLeave: z
    .string()
    .min(0, "Family related leave count cannot be negative"),
  emergencyLeave: z.string().min(0, "Emergency leave count cannot be negative"),
  maternityLeave: z.string().min(0, "Maternity leave count cannot be negative"),
  paternityLeave: z.string().min(0, "Paternity leave count cannot be negative"),
  hithaaneeLeave: z.string().min(0, "Hithaanee leave count cannot be negative"),
  officialLeave: z.string().min(0, "Official leave count cannot be negative"),
  noPayLeave: z.string().min(0, "No pay leave count cannot be negative"),
  designationId: z.string().min(0, "Designation Id cannot be negative"),
  joinedDate: z.date(),
});

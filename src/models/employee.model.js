import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Please enter employeeId"],
    },
    firstName: {
      type: String,
      required: [true, "Please enter your firstName."],
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your lastName."],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email."],
      unique: true,
      lowercase: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, "Please enter your DOB."],
    },
    department: {
      type: String,
      required: [true, "Please enter your department."],
      lowercase: true,
    },
    position: {
      type: String,
      required: [true, "Please enter your position."],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", employeeSchema);

import { Employee } from "../models/employee.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const createEmployee = asyncHandler(async (req, res) => {
  /* Create new employee */
  const {
    employeeId,
    firstName,
    lastName,
    email,
    dateOfBirth,
    department,
    position,
  } = req.body;

  if (
    [
      employeeId,
      firstName,
      lastName,
      email,
      dateOfBirth,
      department,
      position,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const newCreatedEmployee = await Employee.create({
    employeeId,
    firstName,
    lastName,
    email,
    dateOfBirth,
    department,
    position,
  });

  if (!newCreatedEmployee) {
    throw new ApiError(500, "Something wrong while creating new employee!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, newCreatedEmployee, "Employee created successfully.")
    );
});

const getEmployee = asyncHandler(async (req, res) => {
  /*  
  Get employee details using their id.
  */
  const { employeeId } = req.params;

  const employee = await Employee.findOne({ employeeId });

  if (!employee) {
    throw new ApiError(404, `Employee with id ${employeeId} dose not exists`);
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, employee, "Employee details fetched successfully!")
    );
});

const updateEmployee = asyncHandler(async (req, res) => {
  /* Update employee details */

  const { firstName, lastName, email, dateOfBirth, department, position } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !dateOfBirth ||
    !department ||
    !position
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  const updatedEmployee = await Employee.findOneAndUpdate(
    { employeeId: req.params.employeeId },
    {
      $set: {
        firstName,
        lastName,
        email,
        dateOfBirth,
        department,
        position,
      },
    },
    { new: true }
  );

  if (!updatedEmployee) {
    throw new ApiError(
      404,
      `Employee with id ${req.params.employeeId} does not exist`
    );
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedEmployee,
        "Employee details updated successfully."
      )
    );
});

const deleteEmployee = asyncHandler(async (req, res) => {
  /* Delete a specific employee by their id */

  const employeeId = req.params.employeeId;

  if (!employeeId) {
    throw new ApiError(400, `Employee id ${employeeId} not found.`);
  }

  const result = await Employee.deleteOne({ employeeId });

  if (result.deletedCount === 0) {
    throw new ApiError(404, `Employee id ${employeeId} not exists.`);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, `${employeeId} id successfully deleted.`));
});

const getSortedAndFilteredEmp = asyncHandler(async (req, res) => {
  /* Get a list of employees with sorting and filtering */

  const { sortBy, sortOrder, departmentFilter, positionFilter, page, limit } =
    req.query;

  const query = {};

  if (departmentFilter) {
    query.department = departmentFilter;
  }

  if (positionFilter) {
    query.position = positionFilter;
  }

  const queriedEmployee = Employee.find(query).sort({
    [sortBy]: sortOrder,
  });

  const skipPage = (page - 1) * limit || 0;
  const employees = await queriedEmployee.limit(limit).skip(skipPage).exec();

  return res.status(200).json({
    status: 200,
    data: employees,
    message: "List of employees fetched successfully!",
    pagination: {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || employees.length,
    },
  });
});

export {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getSortedAndFilteredEmp,
};

import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
  getSortedAndFilteredEmp,
} from "../controllers/employeeController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdminMiddleware.js";

const router = Router();

router.route("/employees").post(verifyJWT, isAdmin, createEmployee);
router.route("/employees/:employeeId").get(verifyJWT, getEmployee);
router.route("/employees/:employeeId").put(verifyJWT, isAdmin, updateEmployee);
router
  .route("/employees/:employeeId")
  .delete(verifyJWT, isAdmin, deleteEmployee);
router.route("/employees").get(getSortedAndFilteredEmp);

export default router;

import { Router } from "express";
import {
  login,
  logout,
  refreshAccessToken,
  register,
  updateUser,
  updateUserRole,
} from "../controllers/userController.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdminMiddleware.js";

const router = Router();

router.route("/registerUser").post(register);
router.route("/loginUser").post(login);
router.route("/logoutUser").post(verifyJWT, logout);
router.route("/updateUser/:userId").put(verifyJWT, updateUser);
router.route("/updateUserRole/:userId").put(verifyJWT, isAdmin, updateUserRole);
router.route("/refresh-token").post(refreshAccessToken);

export default router;

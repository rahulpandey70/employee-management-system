import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  } else {
    throw new ApiError(403, "Access forbidden, Admin role required");
  }
});

export default isAdmin;

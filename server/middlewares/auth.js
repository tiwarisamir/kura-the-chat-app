import jwt from "jsonwebtoken";
import { ErorrHandler } from "../utils/utility.js";

const isAuth = (req, res, next) => {
  const token = req.cookies["kura-token"];
  if (!token)
    return next(new ErorrHandler("Please login to access this route", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decodedData._id;

  next();
};

const isAdmin = (req, res, next) => {
  const token = req.cookies["kura-admin-token"];
  if (!token)
    return next(new ErorrHandler("Only Admin can access this route", 401));

  const secretKey = jwt.verify(token, process.env.JWT_SECRET);

  const isMatched = secretKey === process.env.ADMIN_SECRET_KEY;

  if (!isMatched)
    return next(new ErorrHandler("IOnly Admin can access this route", 401));

  next();
};

export { isAuth, isAdmin };

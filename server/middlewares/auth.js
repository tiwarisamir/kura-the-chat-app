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

export { isAuth };

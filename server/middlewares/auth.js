import jwt from "jsonwebtoken";
import { ErorrHandler } from "../utils/utility.js";
import { KURA_TOKEN } from "../constants/config.js";
import { User } from "../models/user.js";

const isAuth = (req, res, next) => {
  const token = req.cookies[KURA_TOKEN];
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

const socketAuth = async (err, socket, next) => {
  try {
    if (err) return next(err);

    const authToken = socket.request.cookies[KURA_TOKEN];

    if (!authToken)
      return next(new ErorrHandler("Please logint to access this route", 401));

    const decodedData = jwt.verify(authToken, process.env.JWT_SECRET);
    const user = await User.findById(decodedData._id);
    if (!user)
      return next(new ErorrHandler("Please login to access this route", 401));

    socket.user = user;
    return next();
  } catch (error) {
    return next(new ErorrHandler("Please login to access this route", 401));
  }
};

export { isAuth, isAdmin, socketAuth };

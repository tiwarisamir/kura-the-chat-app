import express from "express";
import {
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
} from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuth } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

app.use(isAuth);

app.get("/me", getMyProfile);

app.get("/logout", logout);

app.get("/search", searchUser);

export default app;

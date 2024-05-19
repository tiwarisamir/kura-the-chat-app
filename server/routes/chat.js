import express from "express";
import { isAuth } from "../middlewares/auth.js";
import { newGroupChat } from "../controllers/chat.js";

const app = express.Router();

app.use(isAuth);

app.post("/new", newGroupChat);

export default app;

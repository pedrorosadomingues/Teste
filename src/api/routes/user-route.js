import { Router } from "express";
import { registerUser } from "../controllers/user-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { createUserSchema } from "../../schemas/user-schema.js";

export const userRoute = Router();

userRoute.post("/register", validateBody(createUserSchema), registerUser);

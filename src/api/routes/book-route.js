import { Router } from "express";
import { registerBook } from "../controllers/book-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { createBookSchema } from "../../schemas/book-schema.js";

export const bookRoute = Router();

bookRoute.post("/", validateBody(createBookSchema), registerBook);

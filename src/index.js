import express from "express";
import { connectDb, disconnectDB } from "./config/database.js";
import { userRoute } from "./api/routes/user-route.js";
import { bookRoute } from "./api/routes/book-route.js";

const app = express();

app.use(express.json()).use("/user", userRoute);
app.use(express.json()).use("/book", bookRoute);

export function init() {
  connectDb();
  return Promise.resolve(app);
}

export async function close() {
  await disconnectDB();
}

export default app;

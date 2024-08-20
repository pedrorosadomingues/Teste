import {
  postUser,
  getAllUsers,
  getUserByEmail,
} from "../repositories/user-repository.js";
import { duplicateEmailError } from "../../errors/duplicate-email-error.js";

export async function registerUserService(name, email) {
  const user = await getUserByEmail(email);
  if (user) {
    throw duplicateEmailError();
  }
  return await postUser({ name, email });
}

export async function getAllUsersService() {
  return await getAllUsers();
}

export async function getUserByEmailService(email) {
  return await getUserByEmail(email);
}

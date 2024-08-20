import {
  postBook,
  getAllBooks,
  getBookByParams,
} from "../repositories/book-repository.js";
import { getUserByEmailService } from "./user-service.js";
import {
  userNotFoundError,
  duplicateBookByEmailError,
} from "../../errors/index.js";

export async function registerBookService(title, author, user_email) {
  const book = await getBookByParams(title, author, user_email);
  const user = await getUserByEmailService(user_email);

  if (!user) {
    throw userNotFoundError();
  }
  if (book && book.user_email === user_email) {
    throw duplicateBookByEmailError();
  }
  await postBook({ title, author, user_email });
  return getAllBooks();
}

export async function getAllBooksService() {
  return await getAllBooks();
}

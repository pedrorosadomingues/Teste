import { prisma } from "../../config/database.js";

export async function postBook({ title, author, user_email }) {
  return await prisma.book.create({
    data: {
      title,
      author,
      user_email,
    },
  });
}

export async function getAllBooks() {
  return await prisma.book.findMany();
}

export async function getBookByParams(title, author, user_email) {
  return await prisma.book.findFirst({
    where: {
      title,
      author,
      user_email,
    },
  });
}

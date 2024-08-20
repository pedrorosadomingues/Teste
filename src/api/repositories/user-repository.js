import { prisma } from "../../config/database.js";

export async function postUser({ name, email }) {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  });
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

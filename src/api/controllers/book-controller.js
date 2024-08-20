import { registerBookService } from "../services/book-service.js";

export async function registerBook(req, res) {
  try {
    const { title, author, user_email } = req.body;
    const allBooks = await registerBookService(title, author, user_email);

    return res.status(201).json(allBooks);
  } catch (error) {
    switch (error.name) {
      case "DuplicateBookByEmailError":
        return res.status(409).json({ error: error.message });
      case "UserNotFoundError":
        return res.status(400).json({ error: error.message });
      default:
        return res.status(500).json({ error: error.message });
    }
  }
}

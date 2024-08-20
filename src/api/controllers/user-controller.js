import {
  registerUserService,
  getAllUsersService,
} from "../services/user-service.js";

export async function registerUser(req, res) {
  try {
    const { name, email } = req.body;
    await registerUserService(name, email);

    const allUsers = await getAllUsersService();

    return res.status(201).json(allUsers);
  } catch (error) {
    if (error.name === "DuplicateEmailError") {
      return res.status(409).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
}

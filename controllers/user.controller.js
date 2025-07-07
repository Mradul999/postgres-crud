import {
  createUserService,
  getAllUsers,
  getUserById,
  updateUserNameByIdService,
} from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user by id" });
  }
};

export const updateUserNameById = async (req, res) => {
  try {
    const { name, id } = req.body;

    const updatedUser = await updateUserNameByIdService(name, id);
    res.json({ message: "user updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the user" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await createUserService(name, email);
    res.json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

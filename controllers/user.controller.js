import {
  createUserService,
  deleteUserService,
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

    if (updatedUser.status === "not-found")
      return res.status(404).json({ message: "User with this id not found" });

    if (updatedUser.status === "same-name")
      return res
        .status(400)
        .json({ message: "new name is same as the old name " });

    res.json({ message: "user updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await deleteUserService(id);
    if (result.status === "not-found")
      return res.status(404).json({ message: "user with this id not found" });
    res
      .status(200)
      .json({ message: "user deleted successfully", deletedUser: result.user });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the user" });
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

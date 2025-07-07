import pool from "../config/db.js";

export const getAllUsers = async () => {
  const result = await pool.query("select * from users");
  return result.rows;
};

export const getUserById = async (id) => {
  const result = await pool.query("select * from users where  id=$1", [id]);
  return result.rows[0];
};

export const updateUserNameByIdService = async (name, id) => {
  const result = await pool.query("update users set name=$1 where id=$2", [
    name,
    id,
  ]);

  return result.rows[0];
};

export const createUserService = async (name, email) => {
  const result = await pool.query(
    "insert into users (name,email) values($1,$2) returning *",
    [name, email]
  );
  return result.rows[0];
};

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
  const existingUser = await pool.query("select  * from users where id=$1", [
    id,
  ]);

  if (existingUser.rowCount == 0) return { status: "not-found" };

  if (existingUser.name === name) return { status: "same-name" };

  const result = await pool.query(
    "update users set name=$1 where id=$2 returning *",
    [name, id]
  );

  return result.rows[0];
};

export const deleteUserService = async (id) => {
  const existingUser = await pool.query("select  * from users where id=$1", [
    id,
  ]);
  if (existingUser.rowCount == 0) return { status: "not-found" };

  const result = await pool.query(
    "delete from users where id=$1 returning * ",
    [id]
  );

  return { status: "deleted", user: result.rows[0] };
};

export const createUserService = async (name, email) => {
  const result = await pool.query(
    "insert into users (name,email) values($1,$2) returning *",
    [name, email]
  );
  return result.rows[0];
};

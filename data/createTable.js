import pool from "../config/db.js";

export const createTable = async () => {
  try {
    pool.query(`create TABLE if NOT EXISTS users(
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    created_at timestamp default now()
)`);
    console.log("users table created if not exists");
  } catch (error) {
    console.log("error occurred creating table", error);
  }
};

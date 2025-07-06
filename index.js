import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import pool from "./config/db.js";

import userRoute from "./routes/userRoutes.js";
import { createTable } from "./data/createTable.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
createTable();

//db connection
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(result.rows[0].current_database);
  } catch (error) {
    console.error("databse connection error", error);
  }
});

app.use("/api", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

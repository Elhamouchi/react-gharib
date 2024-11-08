import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";       
import dotenv from "dotenv";

// ---------

import authRoutes from "./routes/auth.js";
import db from "./db/connection.js";

dotenv.config({ path: "./.env" });

const app = express();
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      `MYSQL connected with ${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`
    );
  }
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(cookieParser());
app.use("/auth", authRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("server started on port", process.env.SERVER_PORT);
});

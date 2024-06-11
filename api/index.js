import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js"

dotenv.config();
//console.log(process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Wippy, winnning...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
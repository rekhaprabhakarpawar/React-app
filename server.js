import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("welcome to ecomerce");
});
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(
    `SERVER RUNNING ON ${process.env.DEV_MODE} mode on ${PORT}`.bgBlue.white
  );
});
// import express from "express";
// import mongoose from "mongoose";
// //import cors from "cors";

// const app = express();
// //app.use(cors());
// app.use(express.json());
// mongoose.connect("mongodb://localhost://27017/taskdb");
// const Task = mongoose.model("Task", {
//   title: String,
// });
// app.get("/tasks", async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// }),
//   app.post("/tasks", async (req, res) => {
//     const task = new Task({ title: req.body.title });
//     await task.save();
//     res.json(task);
//   });
// app.delete("/tasks/:id", async (req, res) => {
//   await Task.findByIdAndDelete(req.params.id);
//   res.json({ message: "Task deleted" });
// });
// app.listen(5000, () => {
//   console.log("server running on 5000");
// });

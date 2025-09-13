import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//Config
dotenv.config();

//REST OBJECT
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//REST API
app.get("/", (req, res) => {
  res.status(200).send("MQA-2025 Developed By MSOS ltd");
});

//ROUTES
app.use("/api/v1/auth", authRoutes);

//PORT
const PORT = process.env.PORT || 3000;
//LISTEN
app.listen(PORT, () => {
  console.log(`POS-2024 Application Running On Port ${PORT}`.bgYellow);
});

dbConnect();

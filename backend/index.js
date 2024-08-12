import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import dishRoute from "./Route/dish.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";

const app = express();
//middleware
app.use(cors());
app.use(express.json());

const URL = process.env.MongoDBURL;
//connect to mongodb
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error", error);
}
//defining routes
app.use("/dish", dishRoute);
app.use("/user", userRoute);

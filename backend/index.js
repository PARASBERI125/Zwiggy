import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import dishRoute from "./Route/dish.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
//middleware
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
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
if (process.env.NODE_ENV === "production") {
  const dirpath = path.resolve();
  app.use(express.static("frontend/dist"));
  app.use("/images", express.static(path.join(__dirname, "/frontend/images")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirpath, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

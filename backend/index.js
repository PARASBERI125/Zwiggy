import express from "express";
import mongoose from "mongoose";
import path from "path";
import "dotenv/config";
import dishRoute from "./Route/dish.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";

const app = express();
const __dirname = path.resolve();
// Middleware
app.use(cors());
app.use(express.json());

const URL = process.env.MongoDBURL;
const PORT = process.env.PORT;
// Connect to MongoDB
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define API routes
app.use("/dish", dishRoute);
app.use("/user", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port 3000`);
});

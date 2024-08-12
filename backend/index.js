import express from "express";
import mongoose from "mongoose";
import path from "path";
import "dotenv/config";
import dishRoute from "./Route/dish.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

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

// Serve the React frontend
app.use(express.static(path.join(__dirname, "frontend")));

// The catch-all handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

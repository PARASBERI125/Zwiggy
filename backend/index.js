import express from "express";
import mongoose from "mongoose";
import path from "path";
import "dotenv/config";
import dishRoute from "./Route/dish.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";

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
app.use(express.static(path.join(__dirname, "build")));

// Serve index.html for all other routes (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

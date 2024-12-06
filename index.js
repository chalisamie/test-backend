import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import testRoutes from "./routes/testRoutes.js"; // Importing testRoutes

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // Necessary to handle JSON request bodies

// Enable CORS for all origins
app.use(
  cors({
    origin: "*",
  })
);

// Connect to MongoDB (using MONGODB_URI from .env)
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Use testRoutes for all /test routes
app.use("/api/test", testRoutes); // Any route starting with /test will be handled by testRoutes

// Set the port for the server from environment variable (default to 3000 if not set)
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

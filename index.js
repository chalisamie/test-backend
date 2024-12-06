// Importing the required modules
import express from "express";
import cors from "cors";

// Creating an instance of an Express application
const app = express();

app.use(
  cors({
    origin: "*", // Only allow requests from example.com
  })
);

// Set the port for the server
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

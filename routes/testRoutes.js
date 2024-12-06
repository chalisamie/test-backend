import express from "express";

// Create a router instance
const router = express.Router();

// Handle GET request for /test
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET request received at /test",
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `GET request received at /test/${id}`,
  });
});

// Handle POST request for /test
router.post("/", (req, res) => {
  const data = req.body; // Assuming you're sending JSON data in the request body
  res.status(201).json({
    message: "POST request received at /test",
    data: data, // Responding back with the posted data
  });
});

// Handle PUT request for /test/:id
router.put("/:id", (req, res) => {
  const { id } = req.params; // Get ID from URL parameters
  const data = req.body; // Assuming you're sending JSON data in the request body
  res.status(200).json({
    message: `PUT request received at /test/${id}`,
    data: data,
  });
});

// Handle DELETE request for /test/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params; // Get ID from URL parameters
  res.status(200).json({
    message: `DELETE request received at /test/${id}`,
  });
});

export default router;

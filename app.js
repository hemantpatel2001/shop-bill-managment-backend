const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:5173"], // Allowed frontend origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));

// Database Connection
require("./database"); // Ensure this file sets up your database connection

// Routes
const route = require("./route"); // Import route file
app.use("/", route);

// Export the app
module.exports = app;

/* eslint-disable no-unused-vars */
const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");
const fs = require("fs");

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/database");
const mountRoutes = require("./routes");
// Connect with db
dbConnection();

// Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));
// Cors
app.use(cors());
app.use(
  cors({
    origin: ["*"], // Replace with your frontend URL
    credentials: true, // Allow sending cookies with the request
  })
);

// Mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
} else {
  app.use(morgan("combined"));
  console.log(`mode: ${process.env.NODE_ENV}`); // Using "combined" mode for production
}
// Mount Routes
mountRoutes(app);

// Catch-all route for undefined routes
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

module.exports.handler = serverless(app);
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Write some text to the response
  res.end("Welcome to my simple Node.js app!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

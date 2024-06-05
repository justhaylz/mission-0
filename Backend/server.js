/** @format */

//packages and imports
const express = require("express");
const mysql = require("mysql2");
//MIDDLEWARE
const cors = require("cors");
//EXPRESS
const app = express();
//.ENV
const env = require("dotenv").config();

//Middleware
app.use(cors());
app.use(express.json()); // parses incoming json payloads

//Create connection to the database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ENDPOINTS
app.get("/home", (req, res) => {
  pool.query("SELECT * FROM spellingtree.lv_orange;", (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        errorMessage:
          "An error occurred while fetching data from the database.",
        error: err.message, // Use the error message for better clarity
      });
    } else {
      // Query was successful, send the result
      res.send(result);
    }
  });
});

// Port //
const PORT = process.env.PORT;
app
  .listen(PORT, () => {
    console.log(`it's alive at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log(error);

    if (error.code === "EADDRINUSE") {
      console.log(
        "Port is already in use, try a different port or close any other servers"
      );
    } else {
      console.log("Server error", error);
    }
  });

//fallback port
const fallbackPort = 3000; // Choose a different port if 3000 is taken

app
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log(
        `Port ${PORT} is already in use. Trying fallback port ${fallbackPort}...`
      );
      app.listen(fallbackPort, () => {
        console.log(`Server is running at http://localhost:${fallbackPort}`);
      });
    } else {
      console.error("Server error:", error);
    }
  });

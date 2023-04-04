const express = require("express");
const app = express();
const port = 3000;
const Transaction = require("./db/models/transaction");
const db = require("./db");
const statisticsRoutes = require("./routes/statistics");
const { ValidationError } = require("express-validation");
const validator = require("./validator");
const { loggerConfig } = require("./logger");

// Connect to the MongoDB server
db.connect()
  .then(() => {
    console.log("Connected to MongoDB server");
    app.use(express.json());
    app.get("/", (req, res) => {
      return res.status(200).json("hello");
    });

    app.use("/statistics", statisticsRoutes);

    app.use(validator);
    app.use(loggerConfig);

    app.use((req, res) => res.status(404).send("not found"));

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB connection error:`);
  });

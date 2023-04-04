const expressWinston = require("express-winston");
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "express-api" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

const loggerConfig = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "access.log" }),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

module.exports = { logger, loggerConfig };

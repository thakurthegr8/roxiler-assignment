const { ValidationError } = require("express-validation");
const { logger } = require("../logger");

const validator = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  logger.error(err);
  return res.status(500).json(err);
};

module.exports = validator;

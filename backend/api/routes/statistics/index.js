const {
  saleStatsByMonth,
  pieChartStatisticsByMonth,
  barChartStatisticsByMonth,
  allStatisticsByMonth,
} = require("../../controllers/statistics");
const joi = require("joi");
const router = require("express").Router();
const { validate } = require("express-validation");

const validator = {
  params: joi.object({
    month: joi.number().integer().min(1).max(12).required().messages({
      "number.integer": "month must be an integer",
      "number.min": "month must be at least {#limit}",
      "number.max": "month must be at most {#limit}",
      "number.required": "month is required",
    }),
  }),
};

router.route("/:month").get(validate(validator), allStatisticsByMonth);
router.route("/sales/:month").get(validate(validator), saleStatsByMonth);
router
  .route("/barchart/:month")
  .get(validate(validator), barChartStatisticsByMonth);
router
  .route("/piechart/:month")
  .get(validate(validator), pieChartStatisticsByMonth);

module.exports = router;

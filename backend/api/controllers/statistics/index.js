const winston = require("winston");
const {
  saleStatsByMonthHandler,
  barChartStatisticsByMonthHandler,
  pieChartStatisticsByMonthHandler,
} = require("./handlers");
const { logger } = require("../../logger");

const saleStatsByMonth = async (req, res) => {
  logger.info("hit saleStatsByMonth");
  try {
    const data = await saleStatsByMonthHandler(parseInt(req.params.month));
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const barChartStatisticsByMonth = async (req, res) => {
  logger.info("hit barChartStatisticsByMonth");
  try {
    const data = await barChartStatisticsByMonthHandler(
      parseInt(req.params.month)
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const pieChartStatisticsByMonth = async (req, res) => {
  logger.info("hit pieChartStatisticsByMonth");
  try {
    const data = await pieChartStatisticsByMonthHandler(
      parseInt(req.params.month)
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const allStatisticsByMonth = async (req, res) => {
  const { month } = req.params;
  const iMonth = parseInt(month);
  try {
    const sales = await saleStatsByMonthHandler(iMonth);
    const barchart = await barChartStatisticsByMonthHandler(iMonth);
    const piechart = await pieChartStatisticsByMonthHandler(iMonth);
    const data = { sales, barchart, piechart };
    logger.info(sales);
    if (data !== null) return res.status(200).json(data);
  } catch (error) {
    logger.error(error)
    return res.status(400).json(error);
  }
};

module.exports = {
  allStatisticsByMonth,
  saleStatsByMonth,
  barChartStatisticsByMonth,
  pieChartStatisticsByMonth,
};

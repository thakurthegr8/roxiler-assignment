const moment = require("moment/moment");
const Transaction = require("../../db/models/transaction");

// const isMonth = (month) => {
//   if (!(month >= 1 && month <= 12)) throw new Error("Invalid month");
// };

const saleStatsByMonthHandler = async (month) => {
  try {
    const getData = (await Transaction.find()) || [];
    if (getData.length != 0) {
      const dataByCurrentMonth = getData.filter((item) => {
        const itemMonth = parseInt(moment(item.dateOfSale).month()) + 1;
        return itemMonth === month;
      });
      const result = {
        total_sales: 0,
        total_sold_items: 0,
        total_unsold_items: 0,
        total_items: dataByCurrentMonth.length,
      };
      dataByCurrentMonth.forEach((item) => {
        console.log(item.dateOfSale);
        if (item.sold) {
          result.total_sales += item.price;
          result.total_sold_items += 1;
        }
      });
      result.total_unsold_items =
        dataByCurrentMonth.length - result.total_sold_items;
      return result;
    }
  } catch (error) {
    throw error;
  }
};

const barChartStatisticsByMonthHandler = async (month) => {
  try {
    const getData = (await Transaction.find()) || [];
    if (getData.length != 0) {
      const dataByCurrentMonth = getData.filter((item) => {
        const itemMonth = parseInt(moment(item.dateOfSale).month()) + 1;
        return itemMonth === month;
      });
      const result = {
        "0_100": 0,
        "101_200": 0,
        "201_300": 0,
        "301_400": 0,
        "401_500": 0,
        "501_600": 0,
        "601_700": 0,
        "701_800": 0,
        "801_900": 0,
        901: 0,
      };
      const inRange = (i, j, x) => x >= i && x <= j;
      dataByCurrentMonth.forEach((item) => {
        const { price } = item;
        if (inRange(0, 100, price)) {
          result["0_100"] += 1;
        } else if (inRange(101, 200, price)) {
          result["101_200"] += 1;
        } else if (inRange(201, 300, price)) {
          result["201_300"] += 1;
        } else if (inRange(301, 400, price)) {
          result["301_400"] += 1;
        } else if (inRange(401, 500, price)) {
          result["401_500"] += 1;
        } else if (inRange(501, 600, price)) {
          result["501_600"] += 1;
        } else if (inRange(601, 700, price)) {
          result["601_700"] += 1;
        } else if (inRange(701, 800, price)) {
          result["701_800"] += 1;
        } else if (inRange(801, 900, price)) {
          result["801_900"] += 1;
        } else if (price >= 901) {
          result["901"] += 1;
        }
      });
      return result;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const pieChartStatisticsByMonthHandler = async (month) => {
  try {
    const getData = (await Transaction.find()) || [];
    if (getData.length != 0) {
      const dataByCurrentMonth = getData.filter((item) => {
        const itemMonth = parseInt(moment(item.dateOfSale).month()) + 1;
        return itemMonth === month;
      });
      if (dataByCurrentMonth.length === 0) return res.status(200).json({});
      const categories = Array.from(
        new Set(dataByCurrentMonth.map((item) => item.category))
      );
      let result = {};
      categories.forEach((item) => {
        result = { ...result, [item]: 0 };
      });
      dataByCurrentMonth.map((item) => {
        result[item.category] += 1;
      });
      return result;
    }
    return null;
  } catch (error) {
    throw error
  }
};

module.exports = {
  saleStatsByMonthHandler,
  barChartStatisticsByMonthHandler,
  pieChartStatisticsByMonthHandler,
};

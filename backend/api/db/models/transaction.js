const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  dateOfSale: { type: Date, required: true },
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  sold: { type: Boolean, required: true },
  category: { type: String, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

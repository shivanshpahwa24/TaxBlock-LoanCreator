const mongoose = require("mongoose");

const LoanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  EMI: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

module.exports = Loan = mongoose.model("loan", LoanSchema);

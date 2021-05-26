const mongoose = require("mongoose");

const LoanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    /* unique: true, */
  },
  email: {
    type: String,
    required: true,
    /* unique: true, */
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
    type: Date,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  EMI: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

module.exports = Loan = mongoose.model("loan", LoanSchema);

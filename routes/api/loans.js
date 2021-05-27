const express = require("express");
const router = express.Router();
const Loan = require("../../models/Loan");
const { check, validationResult } = require("express-validator");
const { v4: uuid } = require("uuid");
const moment = require("moment");

// Get all loans
router.get("/", async (req, res) => {
  try {
    const loans = await Loan.find();

    res.json(loans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get loans by user's contact no.
router.get(
  "/:contact",
  [
    check("contact")
      .not()
      .isEmpty()
      .withMessage("Contact no. is required")
      .bail()
      .isNumeric()
      .withMessage("Contact no. must be a number"),
  ],
  async (req, res) => {
    const errors = validationResult(req); //Check for any errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const loans = await Loan.find({ contact: req.params.contact }).sort({
        date: -1,
      });

      res.json(loans);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// Add a user marks
router.post(
  "/",
  [
    check("name", "Applicant Name is required").not().isEmpty(),
    check("contact")
      .not()
      .isEmpty()
      .withMessage("Contact no. is required")
      .bail()
      .isNumeric()
      .withMessage("Contact no. must be a number"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email Address is required")
      .bail()
      .isEmail()
      .withMessage("Please enter a valid Email Address"),
    check("address", "Address is required").not().isEmpty(),
    check("amount")
      .not()
      .isEmpty()
      .withMessage("Loan Amount is required")
      .bail()
      .isNumeric()
      .withMessage("Loan Amount must be a number")
      .bail()
      .isInt({ min: 0 })
      .withMessage("Loan Amount cannot be negative"),
    check("start", "Loan Start Date is required").not().isEmpty(),
    check("expiry", "Loan Expiry Date is required").not().isEmpty(),
    check("expiry")
      .isAfter("start")
      .withMessage("Expiry Date cannot be before the Start Date"),
  ],
  async (req, res) => {
    const errors = validationResult(req); //Check for any errors

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { contact, name, email, address, amount, start, expiry } = req.body;
    let startDate = new Date(start);
    let endDate = new Date(expiry);

    const msPerMonth = 1000 * 60 * 60 * 24 * 30;
    const diffInMonths = Math.floor(
      (endDate.getTime() - startDate.getTime()) / msPerMonth
    );
    const EMI = amount / diffInMonths;

    startDate = moment(startDate).format("Do MMMM YYYY");

    endDate = moment(endDate).format("Do MMMM YYYY");

    const newLoan = {
      contact,
      name,
      email,
      address,
      amount,
      start: startDate,
      expiry: endDate,
      EMI,
    };

    try {
      // Insert into db
      const loan = new Loan(newLoan);

      await loan.save();
      console.log("New Loan Added");

      res.json(loan);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

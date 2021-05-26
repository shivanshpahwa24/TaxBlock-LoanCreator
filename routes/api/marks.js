const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const { v4: uuid } = require("uuid");

// Get all users for leaderboard
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add a user marks
router.post(
  "/",
  [
    check("rollNo", "Roll No. is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
    check("maths")
      .not()
      .isEmpty()
      .withMessage("Maths Marks are required")
      .bail()
      .isNumeric()
      .withMessage("Maths Marks should be a number")
      .bail()
      .isInt({ min: 0, max: 100 })
      .withMessage("Maths Marks should be between 0 and 100"),
    check("physics")
      .not()
      .isEmpty()
      .withMessage("Physics Marks are required")
      .bail()
      .isNumeric()
      .withMessage("Physics Marks should be a number")
      .bail()
      .isInt({ min: 0, max: 100 })
      .withMessage("Physics Marks should be between 0 and 100"),
    check("chemistry")
      .not()
      .isEmpty()
      .withMessage("Chemistry Marks are required")
      .bail()
      .isNumeric()
      .withMessage("Chemistry Marks should be a number")
      .bail()
      .isInt({ min: 0, max: 100 })
      .withMessage("Chemistry Marks should be between 0 and 100"),
  ],
  async (req, res) => {
    const errors = validationResult(req); //Check for any errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { rollNo, name, maths, physics, chemistry } = req.body;

    const total = parseInt(maths) + parseInt(physics) + parseInt(chemistry);
    const percentage = (total / 3).toFixed(2) + "%";
    const id = uuid();

    try {
      //See if User exists
      let user = await User.findOne({ where: { rollNo } });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Roll No. already exists" }] });
      }

      // Insert into table
      user = await User.create({
        id,
        rollNo,
        name,
        maths,
        physics,
        chemistry,
        total,
        percentage,
      });

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

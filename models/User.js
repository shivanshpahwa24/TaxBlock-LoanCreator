const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  rollNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  maths: {
    type: Sequelize.INTEGER,
  },
  physics: {
    type: Sequelize.INTEGER,
  },
  chemistry: {
    type: Sequelize.INTEGER,
  },
  total: {
    type: Sequelize.INTEGER,
  },
  percentage: {
    type: Sequelize.STRING,
  },
});

User.sync().then(() => {
  console.log("table created");
});
module.exports = User;

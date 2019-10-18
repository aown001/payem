const Sequelize = require("sequelize");

const sequelize = new Sequelize("payem", "root", "abc123", {
  host: "127.0.0.1",
  dialect: "mysql",

});

module.exports = sequelize;
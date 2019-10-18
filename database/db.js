var Sequelize = require('sequelize');

const sequelize = new Sequelize("payem", "root", "abc123", {
    host: "127.0.0.1",
    dialect: "mysql",
  
  });

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
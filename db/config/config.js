module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD || "abc123",
    "database": process.env.MYSQL_DATABASE || "payem",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE || "payem",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.MYSQL_USERNAME || "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE || "payem",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}

const sequelize = require("./db");
const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mariadb",
    dialectOptions: { connectTimeout: 1000 },
    host: process.env.DB_HOST,
    operatorsAliases: false,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
  }
);

const Sequelize = require("sequelize");
const mysql2 = require("mysql2");

const db = {};

db.sequelize = new Sequelize("recipe-vault", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = db;

const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const connection = new Sequelize(dbconfig);

// import models
const User = require("../Model/User");
const Tool = require("../Model/Tools");
const Paper = require("../Model/Paper");
const Contact = require("../Model/Contact");
const NewsPaper = require("../Model/NewsPaper");
const LineSearch = require("../Model/LineSearch");

// inciando funções
Tool.init(connection);
User.init(connection);
Paper.init(connection);
Contact.init(connection);
NewsPaper.init(connection);
LineSearch.init(connection);

LineSearch.associate(connection);
Paper.associate(connection);

module.exports = connection;

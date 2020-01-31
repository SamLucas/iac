import Sequelize from "sequelize";
import dbconfig from "@/config/database";

const connection = new Sequelize(dbconfig);

// import models

import User from "@/models/User";
import Tool from "@/models/Tools";
import Paper from "@/models/Paper";
import Contact from "@/models/Contact";
import NewsPaper from "@/models/NewsPaper";
import LineSearch from "@/models/LineSearch";

// inciando funções
Tool.init(connection);
User.init(connection);
Paper.init(connection);
Contact.init(connection);
NewsPaper.init(connection);
LineSearch.init(connection);

LineSearch.associate(connection);
Paper.associate(connection);

export default connection;

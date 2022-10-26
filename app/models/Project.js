const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Project extends Model {}

Project.init(
  {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT,
    link: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "project",
  }
);

module.exports = Project;

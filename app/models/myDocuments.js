const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class MyDocuments extends Model { }

MyDocuments.init(
  {
    link: DataTypes.TEXT,
    description: DataTypes.TEXT,
    pictures: DataTypes.TEXT,
    title: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "myDocuments",
  }
);

module.exports = MyDocuments;

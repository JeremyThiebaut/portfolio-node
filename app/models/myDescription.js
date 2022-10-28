const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class MyDescription extends Model { }

MyDescription.init(
  {
    text: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "myDescription",
  }
);

module.exports = MyDescription;

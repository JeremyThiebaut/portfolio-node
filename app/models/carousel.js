const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Carousel extends Model {}

Carousel.init(
  {
    text: DataTypes.TEXT,
    image: DataTypes.TEXT,
    title: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "carousel",
  }
);

module.exports = Carousel;

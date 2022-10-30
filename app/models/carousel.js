const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Carousel extends Model {}

Carousel.init(
  {
    image: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "carousel",
  }
);

module.exports = Carousel;

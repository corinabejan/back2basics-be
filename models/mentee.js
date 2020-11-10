"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mentee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mentee.belongsToMany(models.mentor, {
        through: "mentorsMentees",
        foreignKey: "menteeId",
      });
    }
  }
  mentee.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      credenetials: DataTypes.STRING,
      interest: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mentee",
    }
  );
  return mentee;
};

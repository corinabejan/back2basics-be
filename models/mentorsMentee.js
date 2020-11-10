"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mentorsMentee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mentorsMentee.belongsTo(models.mentor);
      mentorsMentee.belongsTo(models.mentee);
    }
  }
  mentorsMentee.init(
    {
    },
    {
      sequelize,
      modelName: "mentorsMentee",
    }
  );
  return mentorsMentee;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class custom_lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      custom_lesson.belongsTo(models.teacher);
      custom_lesson.belongsTo(models.student);
    }
  }
  custom_lesson.init(
    {
      name: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "custom_lesson",
    }
  );
  return custom_lesson;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class regular_lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      regular_lesson.belongsTo(models.teacher);
      regular_lesson.belongsTo(models.student);
    }
  }
  regular_lesson.init(
    {
      name: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "regular_lesson",
    }
  );
  return regular_lesson;
};

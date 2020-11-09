"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class live_lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      live_lesson.belongsTo(models.teacher);
      live_lesson.belongsTo(models.student);
    }
  }
  live_lesson.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      lessonDate: DataTypes.STRING,
      lessonTime: DataTypes.STRING,
      zoomUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "live_lesson",
    }
  );
  return live_lesson;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class liveLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      liveLesson.belongsTo(models.teacher);
      liveLesson.belongsTo(models.student);
      liveLesson.hasOne(models.teacher)
      liveLesson.hasOne(models.student)
    }
  }
  liveLesson.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      lessonDate: DataTypes.STRING,
      lessonTime: DataTypes.STRING,
      zoomUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "liveLesson",
    }
  );
  return liveLesson;
};

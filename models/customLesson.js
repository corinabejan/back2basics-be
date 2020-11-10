"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class customLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customLesson.belongsTo(models.teacher);
      customLesson.belongsTo(models.student);
      customLesson.hasOne(models.teacher)
      customLesson.hasOne(models.student)
    }
  }
  customLesson.init(
    {
      name: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "customLesson",
    }
  );
  return customLesson;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class regularLesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      regularLesson.belongsTo(models.teacher);
      regularLesson.belongsTo(models.student);
      regularLesson.hasOne(models.teacher)
      regularLesson.hasOne(models.student)
    }
  }
  regularLesson.init(
    {
      name: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "regularLesson",
    }
  );
  return regularLesson;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      teacher.hasMany(models.regular_lesson);
      teacher.hasMany(models.live_lesson);
      teacher.hasMany(models.custom_lesson);
    }
  }
  teacher.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      skills: DataTypes.STRING,
      languages: DataTypes.STRING,
      agenda: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "teacher",
    }
  );
  return teacher;
};

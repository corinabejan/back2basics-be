'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.hasMany(models.regular_lesson)
      student.hasMany(models.custom_lesson)
      student.hasMany(models.live_lesson)
    }
  };
  student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    credenetials: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};
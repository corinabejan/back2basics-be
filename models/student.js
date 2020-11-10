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
      student.hasMany(models.regularLesson)
      student.hasMany(models.customLesson)
      student.hasMany(models.liveLesson)
      student.belongsTo(models.regularLesson)
      student.belongsTo(models.customLesson)
      student.belongsTo(models.liveLesson)
    }
  };
  student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    credentials: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};
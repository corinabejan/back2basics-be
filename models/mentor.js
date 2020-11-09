'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mentor.belongsToMany(models.mentee, {
        through: "mentorsMentess",
        foreignKey: "mentorId"
      })
    }
  };
  mentor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    agenda: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mentor',
  });
  return mentor;
};
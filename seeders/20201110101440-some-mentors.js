'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "mentors",
      [
        {
          name: "C",
          email: "c@c.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Mentor",
          agenda: "Mentoring student B",
          description: "I am a mentor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bella",
          email: "bella@bella.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Mentor",
          agenda: "Mentoring student Boy",
          description: "I am a mentor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mentors", null, {});
  }
};

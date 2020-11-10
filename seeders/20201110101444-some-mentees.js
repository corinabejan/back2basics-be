'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "mentees",
      [
        {
          name: "D",
          email: "d@d.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Mentee",
          interest: "Mentor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emnet",
          email: "emnet@emnet.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Mentee",
          interest: "Mentor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mentees", null, {});
  }
};

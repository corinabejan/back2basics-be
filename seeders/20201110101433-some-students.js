'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "students",
      [
        {
          name: "B",
          email: "b@b.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boy",
          email: "boy@boy.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("students", null, {});
  }
};

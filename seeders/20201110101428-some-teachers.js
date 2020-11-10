"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "teachers",
      [
        {
          name: "A",
          email: "a@a.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Teacher",
          skills: "Math, Chemistry",
          languages: "English, French",
          agenda: "20-11-2020, How to Count?, Amsterdam",
          regularLessonId: 1,
          customLessonId: 1,
          liveLessonId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Corina",
          email: "corina@corina.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://image.shutterstock.com/image-vector/cute-frog-cartoon-260nw-366900380.jpg",
          credentials: "Teacher",
          skills: "Reading, Literature",
          languages: "Romanian, English",
          agenda: "02-12-2020, Learn how to read, Bucharest",
          regularLessonId: 2,
          customLessonId: 2,
          liveLessonId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teachers", null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "mentorsMentees",
      [
        {
          mentorId: 1,
          menteeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mentorId: 2,
          menteeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("mentorsMentees", null, {});
  }
};

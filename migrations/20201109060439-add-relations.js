'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("teachers", "regular_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "regular_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("teachers", "custom_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "custom_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("teachers", "live_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "live_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "regular_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "regular_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "custom_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "custom_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "live_lessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "live_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teachers", "regular_lessonId");
    await queryInterface.removeColumn("teachers", "custom_lessonId");
    await queryInterface.removeColumn("teachers", "live_lessonId");
    await queryInterface.removeColumn("students", "regular_lessonId");
    await queryInterface.removeColumn("students", "custom_lessonId");
    await queryInterface.removeColumn("students", "live_lessonId");
  }
};

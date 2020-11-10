'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("teachers", "regularLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "regular_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("teachers", "customLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "custom_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("teachers", "liveLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "live_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "regularLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "regular_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "customLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "custom_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("students", "liveLessonId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "live_lessons",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("regularLessons", "teacherId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "teachers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("customLessons", "teacherId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "teachers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("liveLessons", "teacherId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "teachers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("regularLessons", "studentId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "students",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("customLessons", "studentId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "students",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("liveLessons", "studentId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "students",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("teachers", "regularLessonId");
    await queryInterface.removeColumn("teachers", "customLessonId");
    await queryInterface.removeColumn("teachers", "liveLessonId");
    await queryInterface.removeColumn("students", "regularLessonId");
    await queryInterface.removeColumn("students", "customLessonId");
    await queryInterface.removeColumn("students", "liveLessonId");
    await queryInterface.removeColumn("regularLessons", "teacherId")
    await queryInterface.removeColumn("customLessons", "teacherId")
    await queryInterface.removeColumn("liveLessons", "teacherId")
    await queryInterface.removeColumn("regularLessons", "studentId")
    await queryInterface.removeColumn("customLessons", "studentId")
    await queryInterface.removeColumn("liveLessons", "studentId")
  }
};

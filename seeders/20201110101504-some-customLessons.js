'use strict';
const Teacher = require('../models').teacher
const Student = require("../models").student

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const teacher1 = await Teacher.findOne({ where: {email: 'a@a.com'}})
    const teacher2 = await Teacher.findOne({ where: { email: 'corina@corina.com'}})
    const student1 = await Student.findOne({ where: {email: 'b@b.com'}})
    const student2 = await Student.findOne({ where: {email: 'boy@boy.com'}})
    return queryInterface.bulkInsert(
      "customLessons",
      [
        {
          name: "Learn progressive reading",
          videoUrl: "",
          teacherId: teacher2.id,
          studentId: student1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Learn algebra",
          videoUrl: "",
          teacherId: teacher1.id,
          studentId: student2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customLessons", null, {});
  }
};

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
      "liveLessons",
      [
        {
          name: "How to count?",
          location: "Amsterdam",
          lessonDate: "20-11-2020",
          lessonTime: "14:30",
          zoomUrl: "",
          teacherId: teacher1.id,
          studentId: student1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Learn how to read",
          location: "Bucharest",
          lessonDate: "02-12-2020",
          lessonTime: "10:30",
          zoomUrl: "",
          teacherId: teacher2.id,
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

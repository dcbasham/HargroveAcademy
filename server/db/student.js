const db = require('./database');
const Sequelize = require('sequelize');

const { STRING, DECIMAL } = Sequelize;

const Student = db.define('student', {
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: STRING,
    defaultValue:
      'https://cdn-ejfid.nitrocdn.com/HahWXuLfKZbQhJjlzjiUHtqlxVqcJYyP/assets/static/optimized/rev-0cc4069/wp-content/uploads/2020/12/topic-faculty-active-engaged-students-1.png',
  },
  gpa: {
    type: DECIMAL(2, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;

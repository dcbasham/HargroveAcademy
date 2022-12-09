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
      'https://www.byui.edu/images/Research-Creative-Works-Conference/Student_Icon.png',
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

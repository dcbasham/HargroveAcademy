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
      'https://media.istockphoto.com/photos/african-student-sitting-in-classroom-picture-id1351445530?b=1&k=20&m=1351445530&s=170667a&w=0&h=9Lmy0oy3tqoFgvuIPhEKPhbNQrLR12Ym518Zjs-KpF4=',
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

const db = require('./database');
const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;

const Campus = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: STRING,
    defaultValue:
      'https://media.istockphoto.com/photos/university-in-autumn-picture-id173598452?k=20&m=173598452&s=612x612&w=0&h=49b4CwEsyt_9zJGVeJDiYOMIYLiuy55yNlOMoj5lDq4=',
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
module.exports = Campus;

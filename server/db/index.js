// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./student');
const Campus = require('./campus');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
Student.belongsTo(Campus);
Campus.hasMany(Student);

Campus.getCampusAndStudents = async function (id) {
  const campus = await Campus.findByPk(id, {
    include: [{ Model: Student, attributes: 'name' }],
  });
  return campus;
};
module.exports = {
  // Include your models in this exports object as well!
  db,
  Student,
  Campus,
};

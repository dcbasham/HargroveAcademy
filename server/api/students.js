const studentRouter = require('express').Router();
const { Campus } = require('../db');
const Student = require('../db/student');

studentRouter.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

studentRouter.get('/:studentId', async (req, res, next) => {
  try {
    const id = parseInt(req.params.studentId);
    const StudentAndCampus = await Student.findByPk(id, {
      include: { model: Campus },
    });
    res.json(StudentAndCampus);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = studentRouter;

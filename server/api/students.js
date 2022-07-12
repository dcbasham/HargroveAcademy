const studentRouter = require('express').Router();
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
module.exports = studentRouter;

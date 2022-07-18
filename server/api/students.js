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
studentRouter.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.send(newStudent);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
studentRouter.delete('/:id', async (req, res, next) => {
  try {
    const studentTarget = await Student.findByPk(req.params.id);
    await studentTarget.destroy();
    res.json(studentTarget);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});
studentRouter.put('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const targetStudent = await Student.findByPk(id);
    if (!targetStudent) {
      res.status(404).send('No such student found');
    } else {
      await targetStudent.update(req.body);
      res.json(targetStudent);
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});
module.exports = studentRouter;

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
    await Student.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const student = await Student.findByPk(req.params.id);
    res.send(student);
  } catch (err) {
    next(err);
  }
});
studentRouter.use((err, req, res, next) => {
  try {
    console.log(err.message);
    res.status(err.status).send(err.message);
  } catch (e) {
    next(e);
  }
});
module.exports = studentRouter;

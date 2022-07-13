const campusRouter = require('express').Router();
const { Student } = require('../db');
const Campus = require('../db/campus');
campusRouter.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

campusRouter.get('/:campusId', async (req, res, next) => {
  try {
    const id = parseInt(req.params.campusId);
    const campusAndStudents = await Campus.findByPk(id, {
      include: { model: Student },
    });
    res.json(campusAndStudents);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = campusRouter;

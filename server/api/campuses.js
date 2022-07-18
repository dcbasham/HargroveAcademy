/* eslint-disable radix */
const campusRouter = require('express').Router();
const { Student } = require('../db');
const Campus = require('../db/campus');
campusRouter.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (e) {
    next(e);
  }
});

campusRouter.get('/:campusId', async (req, res, next) => {
  try {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.campusId);
    const campusAndStudents = await Campus.findByPk(id, {
      include: { model: Student },
    });
    res.json(campusAndStudents);
  } catch (e) {
    next(e);
  }
});
//POST for /api/campuses
campusRouter.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
  } catch (err) {
    next(err);
  }
});
campusRouter.delete('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const targetCampus = await Campus.findByPk(id);
    await targetCampus.destroy();
    res.send(targetCampus);
  } catch (err) {
    next(err);
  }
});
campusRouter.put('/:id', async (req, res, next) => {
  try {
    await Campus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const campus = await Campus.findByPk(req.params.id);
    res.send(campus);
  } catch (err) {
    next(err);
  }
});
campusRouter.use((err, req, res, next) => {
  try {
    console.log(err.message);
    res.status(err.status).send(err.message);
  } catch (e) {
    next(e);
  }
});

module.exports = campusRouter;

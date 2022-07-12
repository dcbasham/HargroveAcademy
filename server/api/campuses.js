const campusRouter = require('express').Router();
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
module.exports = campusRouter;

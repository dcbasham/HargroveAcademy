import { combineReducers } from 'redux';
import campusesReducer from './campuses';
import studentsReducer from './students';
import singleCampus from './singleCampus';
const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleCampus,
});

export default appReducer;

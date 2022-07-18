import { combineReducers } from 'redux';
import campusesReducer from './campuses';
import studentsReducer from './students';
import campus from './singleCampus';
import student from './singleStudent';
const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  campus,
  student,
});

export default appReducer;

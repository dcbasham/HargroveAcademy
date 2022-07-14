import { combineReducers } from 'redux';
import campusesReducer from './campuses';
import studentsReducer from './students';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';
const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleCampus,
  singleStudent,
});

export default appReducer;

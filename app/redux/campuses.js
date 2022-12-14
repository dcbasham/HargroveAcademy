import axios from 'axios';
import { SET_CAMPUS } from './singleCampus';
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const SET_CAMPUSES = 'SET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

/*  ACTION CREATORs */

const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});
const addCampus = (campus) => ({
  type: ADD_CAMPUS,
  campus,
});
const removedCampus = (campus) => ({
  type: DELETE_CAMPUS,
  campus,
});
/*THUNKS*/
export const fetchCampuses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/campuses');
    dispatch(setCampuses(data));
  } catch (e) {
    console.error(e.message);
  }
};
export const createCampus = (campus) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/campuses', campus);
    dispatch(addCampus(created));
  };
};
export const deleteCampus = (id) => {
  return async (dispatch) => {
    const { data: campus } = await axios.delete(`/api/campuses/${id}`);
    console.log('returned from axios.delete', campus);
    dispatch(removedCampus(campus));
  };
};

// REDUCER (( Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);
    case SET_CAMPUS:
      return state.map((campus) => {
        return campus.id === action.campus.id ? action.campus : campus;
      });
    default:
      return state;
  }
}

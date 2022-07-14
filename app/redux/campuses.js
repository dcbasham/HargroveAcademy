import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
/*  ACTION CREATORs */

const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});
const addCampus = (campus) => ({
  type: ADD_CAMPUS,
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
export const createCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/campuses', campus);
    dispatch(addCampus(created));
    history.push('/');
  };
};
// REDUCER (( Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      const { name } = action.campus;
      return [...state, action.campus];
    default:
      return state;
  }
}

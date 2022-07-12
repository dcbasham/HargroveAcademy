import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';

/*  ACTION CREATOR */

export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});

export const fetchCampuses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/campuses');
    dispatch(setCampuses(data));
  } catch (e) {
    console.error(e.message);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}

import axios from 'axios';

const GOT_CAMPUS = 'GOT_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
export const gotCampus = (campus) => ({
  type: GOT_CAMPUS,
  campus,
});
const setCampus = (campus) => ({
  type: UPDATE_CAMPUS,
  campus,
});
export const fetchSingleCampus = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/campuses/${id}`);
    dispatch(gotCampus(data));
  } catch (e) {
    console.error(e);
  }
};
export const updateCampus = (id, formData) => async (dispatch) => {
  try {
    const { data: campus } = await axios.put(`/api/campuses/${id}`, formData);
    console.log('data: campus form axios.put', campus);
    dispatch(setCampus(campus));
    history.push('/');
  } catch (err) {
    console.error(err.message);
  }
};
export default (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUS:
      return action.campus;
    case UPDATE_CAMPUS:
      // eslint-disable-next-line no-confusing-arrow
      return state.campuses.map((campus) =>
        campus.id === action.campus.id ? action.campus : campus
      );

    default:
      return state;
  }
};

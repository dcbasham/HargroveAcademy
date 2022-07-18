import axios from 'axios';

export const SET_CAMPUS = 'SET_CAMPUS';

export const setCampus = (campus) => ({
  type: SET_CAMPUS,
  campus,
});

export const updateCampus = (id, campus) => async (dispatch) => {
  const { data } = await axios.put(`/api/campuses/${id}`, campus);
  dispatch(setCampus(data));
};

export const fetchSingleCampus = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/campuses/${id}`);
    dispatch(setCampus(data));
  } catch (e) {
    console.error(e);
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;

    default:
      return state;
  }
};

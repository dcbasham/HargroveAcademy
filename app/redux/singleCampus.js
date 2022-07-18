import axios from 'axios';

const GOT_CAMPUS = 'GOT_CAMPUS';

export const gotCampus = (campus) => ({
  type: GOT_CAMPUS,
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

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_CAMPUS:
      return action.campus;

    default:
      return state;
  }
};

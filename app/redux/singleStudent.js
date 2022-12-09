/* eslint-disable-next-line no-confusing-arrow*/
import axios from 'axios';

const SET_STUDENT = 'SET_STUDENT';

export const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});

export const fetchSingleStudent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);

    dispatch(setStudent(data));
  } catch (e) {
    console.error(e);
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;

    default:
      return state;
  }
};

/* eslint-disable-next-line no-confusing-arrow*/
import axios from 'axios';

const SET_STUDENT = 'SET_STUDENT';

export const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});
export const updateStudent = (id, student) => async (dispatch) => {
  const { data } = await axios.put(`/api/students/${id}`, student);
  dispatch(setStudent(data));
};
export const getStudent = (id) => async (dispatch) => {
  const { data } = await axios.get(`api/students/${id}`);
  dispatch(setStudent(data));
};
export default (state = {}, action) => {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;

    default:
      return state;
  }
};

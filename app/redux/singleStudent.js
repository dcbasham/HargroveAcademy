/* eslint-disable-next-line no-confusing-arrow*/
import axios from 'axios';

const GOT_STUDENT = 'GOT_STUDENT';
const SET_STUDENT = 'SET_STUDENT';

export const gotStudent = (student) => ({
  type: GOT_STUDENT,
  student,
});
const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});
export const fetchSingleStudent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);

    dispatch(gotStudent(data));
  } catch (e) {
    console.error(e);
  }
};
export const updateStudent = (id, formData) => async (dispatch) => {
  try {
    const { data: student } = await axios.put(`/api/students/${id}`, formData);
    console.log('data from axios.put for student', student);
    dispatch(setStudent(student));
    history.push('/');
  } catch (err) {
    console.log(err.message);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENT:
      return action.student;
    case SET_STUDENT:
      return state.students.map((student) =>
        student.id === action.student.id ? action.student : student
      );
    default:
      return state;
  }
};

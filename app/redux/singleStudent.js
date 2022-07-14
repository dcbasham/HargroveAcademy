import axios from 'axios';

const GOT_STUDENT = 'GOT_STUDENT';

export const gotStudent = (student) => ({
  type: GOT_STUDENT,
  student,
});

export const fetchSingleStudent = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);
    console.log('data from axios get request', data);
    dispatch(gotStudent(data));
  } catch (e) {
    console.error(e);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENT:
      console.log('action.student in reducer', action.student);
      return action.student;
    default:
      return state;
  }
};

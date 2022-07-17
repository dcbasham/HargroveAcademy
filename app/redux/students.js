import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';
const SET_STUDENTS = 'SET_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';
/*action creators*/
export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students,
});
const addStudent = (student) => ({
  type: ADD_STUDENT,
  student,
});
const removedStudent = (student) => ({
  type: DELETE_STUDENT,
  student,
});
/*thunks*/
export const fetchStudents = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/students');
    dispatch(setStudents(data));
  } catch (e) {
    console.error(e);
  }
};
export const createStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/students', student);
    dispatch(addStudent(created));
    history.push('/');
  };
};
export const deleteStudent = (id) => async (dispatch) => {
  try {
    const { data: deletedStudent } = await axios.delete(`/api/students/${id}`);
    dispatch(removedStudent(deletedStudent));
  } catch (err) {
    console.log(err.message);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);
    default:
      return state;
  }
}

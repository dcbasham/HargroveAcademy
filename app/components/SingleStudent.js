import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

class Student extends React.Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.fetchStudent(studentId);
  }
  render() {
    const student = this.props.singleStudent;
    return (
      <div>
        <h3>Student: {' ' + student.firstName + ' ' + student.lastName} </h3>
        <h5>{student.email} </h5>
        <img width="200" src={student.imageUrl} />
        <h5>GPA: {student.gpa}</h5>
        {student.campus ? (
          <h5>
            {' '}
            Campus: <br />
            {student.campus.name}
          </h5>
        ) : (
          <h3> No data for student campus yet</h3>
        )}
      </div>
    );
  }
}
const mapState = ({ singleStudent }) => {
  return {
    singleStudent,
  };
};
const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchSingleStudent(id)),
});

export default connect(mapState, mapDispatch)(Student);

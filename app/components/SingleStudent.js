import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardImg, Button, Tab } from 'react-bootstrap';

class Student extends React.Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.fetchStudent(studentId);
  }
  render() {
    const student = this.props.singleStudent;
    console.log('student', student);

    return (
      <Card>
        <Card.Header>Student</Card.Header>
        <Card.Title>
          {' ' + student.firstName + ' ' + student.lastName}{' '}
        </Card.Title>
        <Card.Subtitle style={{ color: '#28464B' }}>
          {student.email} | GPA: {student.gpa}
        </Card.Subtitle>

        <Card.Img variant="bottom" src={student.imageUrl} />
        {student.campusId ? (
          <Card.Footer>
            {' '}
            Campus:{' '}
            <Link
              style={{
                textDecoration: 'none',
                color: 'navy',
                padding: '0.25rem',
                fontStyle: 'italic',
              }}
              to={`/campuses/${student.campusId}`}
            >
              {' '}
              {student.campus.name}
            </Link>
          </Card.Footer>
        ) : (
          <Card.Footer> No data for student campus yet</Card.Footer>
        )}
      </Card>
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

import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../redux/students';
import { Link } from 'react-router-dom';
// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.students.map((student) => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <h3>
                    {student.firstName} {student.lastName}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = ({ students }) => {
  return {
    students,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);

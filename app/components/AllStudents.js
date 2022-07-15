import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../redux/students';
import { Link } from 'react-router-dom';
import { linkStyle } from './AllCampuses';
import AddStudent from './AddStudent';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <Container id="students">
        <Row>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrd5eUMVHWhbGXQQEE91aipRvaID_UbBnERQ&usqp=CAU" />
        </Row>
        <Row>
          <Col xs={{ order: 2 }}>
            Add Student: <AddStudent />
          </Col>
          <Col xs={{ order: 1 }}>
            <ul>
              {' '}
              Students:
              {this.props.students.map((student) => {
                return (
                  <li key={student.id}>
                    <Link style={linkStyle} to={`/students/${student.id}`}>
                      <h3>
                        {student.firstName} {student.lastName}
                      </h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
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

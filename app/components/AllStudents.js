import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../redux/students';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import { ListGroup, Col, Row, Container, Badge } from 'react-bootstrap';

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <Container style={{ height: '100vh', padding: '1rem' }}>
        <Row sm="2" className="justify-content space-around">
          <Col>
            {' '}
            <Badge bg="info"> Students: </Badge>
            <ListGroup>
              {this.props.students.map((student) => {
                return (
                  <ListGroup.Item
                    variant="light"
                    key={student.id}
                    action
                    href={`/students/${student.id}`}
                  >
                    {student.firstName} {student.lastName}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col>
            <AddStudent />
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

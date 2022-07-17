import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../redux/students';
import { deleteStudent } from '../redux/students';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import { Card, Container, Row, Col, CloseButton } from 'react-bootstrap';
import { customStyles } from './Routes';

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
  }
  handleDelete(id) {
    this.props.deleteStudent(id);
  }
  render() {
    const { linkStyle, spacing } = customStyles;
    return (
      <Container fluid>
        <h1 style={{ fontStyle: 'italic', color: 'navy' }}>Students</h1>
        <Row style={spacing}>
          {this.props.students.map((student) => {
            return (
              <Col key={student.id}>
                <Card>
                  <CloseButton
                    style={{ width: '0.5em', textAlign: 'right', marginTop: 0 }}
                    onClick={() => {
                      this.handleDelete(student.id);
                    }}
                  />

                  <Link to={`/students/${student.id}`}>
                    <Card.Text style={linkStyle}>
                      {' '}
                      {student.firstName} {student.lastName}
                    </Card.Text>
                  </Link>
                </Card>
              </Col>
            );
          })}
          <Col>
            <Card>
              <Card.Header>Add Student</Card.Header>
              <AddStudent />
            </Card>
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
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);

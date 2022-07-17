import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { customStyles } from './Routes';
import UpdateStudent from './UpdateStudent';
class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }
  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    this.props.fetchStudent(studentId);
    this.setState({
      id: studentId,
    });
  }
  render() {
    const { Title, Header, Subtitle, Footer, Img } = Card;
    const { linkStyle, fontStyle, spacing } = customStyles;
    const student = this.props.singleStudent;
    console.log('student', student);

    return (
      <Container fluid style={spacing}>
        <Row lg={2} sm={2}>
          <Col>
            <Card>
              <Header>Student</Header>
              <Title style={fontStyle}>
                {' ' + student.firstName + ' ' + student.lastName}{' '}
              </Title>
              <Subtitle style={fontStyle}>
                {student.email} | GPA: {student.gpa}
              </Subtitle>

              <Img
                variant="bottom"
                src={student.imageUrl}
                className="text-center"
                style={{
                  width: '200px',
                  marginLeft: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              />
              {student.campusId ? (
                <Footer>
                  {' '}
                  Campus:{' '}
                  <Link style={linkStyle} to={`/campuses/${student.campusId}`}>
                    {' '}
                    {student.campus.name}
                  </Link>
                </Footer>
              ) : (
                <Footer> No data for student campus yet</Footer>
              )}
            </Card>
          </Col>

          <Col>
            <Card>
              <Header> Update Student</Header>
              <UpdateStudent id={this.state.id} />
            </Card>
          </Col>
        </Row>
      </Container>
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

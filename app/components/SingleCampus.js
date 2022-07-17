import React from 'react';
import { customStyles } from './Routes';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';
import { Link } from 'react-router-dom';
import UpdateCampus from './UpdateCampus';
import { ListGroup, Card, Container, Row, Col } from 'react-bootstrap';
const { Item } = ListGroup;
const { Header, Subtitle, Body, Title } = Card;

class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.fetchCampus(campusId);
    this.setState({
      id: campusId,
    });
  }
  render() {
    const { fontStyle, spacing, linkStyle } = customStyles;

    const campus = this.props.singleCampus;
    return (
      <Container fluid>
        <Row lg={2} sm={2}>
          <Col>
            <Card>
              <Header>Campus</Header>
              <Title style={fontStyle}>{campus.name} </Title>
              <Subtitle style={spacing}>{campus.address}</Subtitle>

              <Card.Img
                style={spacing}
                className="w-50"
                src={campus.imageUrl}
              />
              <Body style={spacing}>
                {campus.students ? (
                  <ListGroup>
                    {' '}
                    <p>Students:</p>
                    {campus.students.map((student) => {
                      return (
                        <Item key={student.id}>
                          <Link
                            style={linkStyle}
                            to={`/students/${student.id}`}
                          >
                            {' '}
                            {student.firstName} {student.lastName}
                          </Link>
                        </Item>
                      );
                    })}
                  </ListGroup>
                ) : (
                  <span>No student data yet!</span>
                )}
              </Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Header>Update Campus</Header>
              <UpdateCampus id={this.state.id} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapState = ({ singleCampus }) => {
  return {
    singleCampus,
  };
};

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchSingleCampus(id)),
});

export default connect(mapState, mapDispatch)(Campus);

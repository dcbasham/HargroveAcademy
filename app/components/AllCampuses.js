import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, deleteCampus } from '../redux/campuses';
import AddCampus from './AddCampus';
import { Card, Col, Row, Form, Container, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { customStyles } from '../_customStyle';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very

// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }
  handleDelete(id) {
    this.props.deleteCampus(id);
  }

  render() {
    const { history } = this.props;
    const { linkStyle, spacing, labelStyle, fontStyle } = customStyles;
    return (
      <Container fluid id="campuses">
        <Row style={spacing} lg="6" sm="3" className="g-md-1">
          {this.props.campuses.map((campus) => (
            <Col key={campus.id}>
              <Card>
                <Card.Body>
                  <Form onSubmit={(ev) => ev.preventDefault()}>
                    <CloseButton
                      className="text-sm-right"
                      onClick={() => {
                        this.handleDelete(campus.id);
                      }}
                    />
                  </Form>
                  <Card.Img variant="top" src={campus.imageUrl} />
                  <Link to={`campuses/${campus.id}`}>
                    <Card.Title style={linkStyle}>{campus.name}</Card.Title>
                  </Link>
                  <Card.Text>{campus.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col>
            Add a campus here: <AddCampus />
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapState = ({ campuses }) => ({
  campuses,
});
const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (id) => dispatch(deleteCampus(id, history)),
  };
};
export default connect(mapState, mapDispatch)(AllCampuses);

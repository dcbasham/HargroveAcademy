import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../redux/campuses';
import AddCampus from './AddCampus';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    return (
      <Container id="campuses">
        <Card>
          <Card.Header>
            <Card.Img
              src="https://cdn.britannica.com/02/146902-050-EF174421/gardens-Maymyo-Myanmar.jpg/"
              fluid="true"
              width={200}
              height={200}
            />
          </Card.Header>

          <Card.Body>
            <CardGroup>
              {this.props.campuses.map((campus) => (
                <Card key={campus.id}>
                  <Card.Body>
                    <Card.Img variant="top" src={campus.imageUrl} />
                    <Link to={`campuses/${campus.id}`}>
                      <Card.Title>{campus.name}</Card.Title>
                    </Link>
                    <Card.Text>{campus.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Card.Body>

          <Card.Footer>
            Add a campus here: <AddCampus />
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

const mapState = ({ campuses }) => {
  return {
    campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);

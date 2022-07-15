import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, deleteCampus } from '../redux/campuses';
import AddCampus from './AddCampus';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }
  handleDelete(id) {
    this.props.deleteCampus(id);
  }

  render() {
    return (
      <Container id="campuses">
        <Image
          fluid
          src="https://cdn.britannica.com/02/146902-050-EF174421/gardens-Maymyo-Myanmar.jpg"
        />
        <Card variant="secondary">
          <Card.Header>
            <Card.Title>Campuses</Card.Title>

            {/* width={200}
              height={200}
            /> */}
          </Card.Header>

          <Card.Body>
            <CardGroup>
              {this.props.campuses.map((campus) => (
                <Card key={campus.id}>
                  <Form onSubmit={(ev) => ev.preventDefault()}>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      type="submit"
                      style={{ bottom: '0', marg 0 }}
                      onClick={() => {
                        this.handleDelete(campus.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Form>
                  <Card.Body>
                    <Card.Img variant="top" src={campus.imageUrl} />
                    <Link to={`campuses/${campus.id}`}>
                      {' '}
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

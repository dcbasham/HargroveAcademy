import React from 'react';
import { createCampus } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
    this.setState({
      name: '',
      address: '',
      description: '',
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { name, address, description } = this.state;
    const { handleSubmit } = this;

    return (
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="address">Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">description:</Form.Label>
          <Form.Control
            placeholder="optional"
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampus(campus, history)),
});

export default connect(null, mapDispatchToProps)(AddCampus);

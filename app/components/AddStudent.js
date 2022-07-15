import React from 'react';
import { createStudent } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createStudent({ ...this.state });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    const { handleSubmit } = this;

    return (
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <Form.Label htmlFor="email">email:</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Add Student
        </Button>{' '}
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatchToProps)(AddCampus);

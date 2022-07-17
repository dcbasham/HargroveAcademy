import React from 'react';
import { createStudent } from '../redux/students';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class AddStudent extends React.Component {
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
    const { Group, Label, Control } = Form;
    const labelStyle = { marginTop: '0.5rem' };
    return (
      <Form onSubmit={handleSubmit}>
        <Group>
          <Label htmlFor="firstName">First Name</Label>
          <Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </Group>
        <Group>
          <Label style={labelStyle} htmlFor="lastName">
            Last Name
          </Label>
          <Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <Label style={labelStyle} htmlFor="email">
            email:
          </Label>
          <Control name="email" value={email} onChange={this.handleChange} />
        </Group>
        <Button style={{ marginTop: '0.5rem' }} variant="success" type="submit">
          Add Student
        </Button>{' '}
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatchToProps)(AddStudent);

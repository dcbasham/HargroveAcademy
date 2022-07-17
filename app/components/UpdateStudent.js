import React from 'react';
import { customStyles } from './Routes';
import { updateStudent } from '../redux/singleStudent';
import { connect } from 'react-redux';
import { Form, Button, FormControl } from 'react-bootstrap';

class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);

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
    this.props.updateStudent(this.props.id, { ...this.state });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    const { labelStyle, spacing } = customStyles;

    const { Group, Label, Control } = Form;
    const { firstName, lastName, email } = this.state;
    return (
      <Form style={spacing} onSubmit={this.handleSubmit}>
        <Group>
          <Label style={labelStyle} htmlFor="firstName">
            First Name:
          </Label>
          <Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </Group>
        <Group>
          <Label style={labelStyle} htmlFor="lastName">
            Last Name:
          </Label>
          <Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Group>
        <Group>
          <Label style={labelStyle} htmlFor="email">
            email :
          </Label>
          <FormControl
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Group>
        <Button style={labelStyle} variant="outline-success" type="submit">
          Update
        </Button>
      </Form>
    );
  }
}
const mapState = ({ singleStudent }) => ({
  singleStudent,
});
const mapDispatch = (dispatch) => ({
  updateStudent: (id, state) => dispatch(updateStudent(id, state)),
});

export default connect(mapState, mapDispatch)(UpdateStudent);

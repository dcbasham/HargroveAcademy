import React from 'react';
import { createStudent } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={lastName} onChange={this.handleChange} />
        <label htmlFor="email">email:</label>
        <input name="email" value={email} onChange={this.handleChange} />

        <button type="submit">Add Student</button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(null, mapDispatchToProps)(AddCampus);

import React from 'react';
import { customStyles } from '../_customStyle';
import { updateStudent } from '../redux/singleStudent';
import { connect } from 'react-redux';
import { Form, Button, FormControl } from 'react-bootstrap';
// import { fetchStudents } from '../redux/students';

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
    const { labelStyle } = customStyles;
    const { firstName, lastName, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label style={labelStyle} htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            aria-placeholder="Alphabetical characters only"
            value={firstName}
            onChange={this.handleChange}
            pattern="[A-Za-z_]+$"
            title="Alphabetical characters"
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
            aria-placeholder="Alphabetical characters only"
            pattern="[A-Za-z_]+$"
            title="Alphabetical characters"
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="email">
            email :
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            aria-placeholder="Valid email address"
            title='Valid email address containing "@" and ".com"'
          />
        </div>
        <Button style={labelStyle} variant="outline-success" type="submit">
          Update
        </Button>
      </form>
    );
  }
}
const mapState = ({ student }) => ({
  student,
});
const mapDispatch = (dispatch) => ({
  updateStudent: (id, state) => dispatch(updateStudent(id, state)),
});

export default connect(mapState, mapDispatch)(UpdateStudent);

import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/_custom.css';
import { updateStudent } from '../redux/students';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.form = React.createRef();
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  validate() {
    this.form.current.reportValidity();
  }
  handleSubmit() {
    this.validate();
    this.props.updateStudent(this.props.id, { ...this.state });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
    });

    return this.state.student;
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div>
        <form id="update" ref={this.form} onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Alphabetical characters only"
            value={firstName}
            onChange={this.handleChange}
            pattern="[A-Za-z \.]+$"
            title="Alphabetical and space characters"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Alphabetical characters"
            pattern="[A-Za-z \.]+$"
            title="Alphabetical and space characters"
          />
          <label htmlFor="email">Email :</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            placeholder="name@domain.com"
            title='Valid email address containing "@" and ".com"'
            pattern="\s*[a-zA-Z0-9._\-]+\s*|\s*[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}\s*"
          />

          <button
            type="submit"
            className="btn-outline-success"
            onClick={this.validate}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}
const mapState = ({ student }) => ({
  student,
});
const mapDispatch = (dispatch) => ({
  updateStudent: (id, state) => dispatch(updateStudent(id, state)),
  fetchStudent: (id) => dispatch(fetchSingleStudent(id)),
});

export default connect(mapState, mapDispatch)(UpdateStudent);

import React from 'react';
import { customStyles } from '../_customStyle';
import { updateCampus } from '../redux/campuses';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

class UpdateCampus extends React.Component {
  constructor(props) {
    super(props);

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
    this.props.updateCampus(this.props.campus, { ...this.state });
    this.setState({
      name: '',
      address: '',
      description: '',
    });
  }

  handleChange(evt) {
    console.log('evt.target.name', evt.target.name);
    console.log('evt.target.value,', evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.campus.id) {
  //     this.setState({
  //       name: this.props.campus.name,
  //       address: this.props.campus.address,
  //     });
  //   }
  // }
  render() {
    const { labelStyle } = customStyles;
    const { history } = this.props.history;
    const { Group, Label, Control } = Form;
    const { name, address, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Group>
          <Label style={labelStyle} htmlFor="name">
            Name:
          </Label>
          <Control
            type="text"
            name="name"
            placeholder="required"
            value={name}
            onChange={this.handleChange}
          />
        </Group>
        <Group>
          <Label style={labelStyle} htmlFor="address">
            Address:
          </Label>
          <Control
            type="text"
            name="address"
            placeholder="required"
            value={address}
            onChange={this.handleChange}
          />
        </Group>
        <Group>
          <Label style={labelStyle} htmlFor="description">
            description:
          </Label>
          <Control
            placeholder="optional"
            type="text"
            name="description"
            value={description}
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
const mapState = ({ campus }) => ({
  campus,
});
const mapDispatch = (dispatch, { history }) => ({
  updateCampus: (campus) => dispatch(updateCampus(campus, history)),
});

export default connect(mapState, mapDispatch)(UpdateCampus);

import React from 'react';
import { customStyles } from '../_customStyle';
import { updateCampus } from '../redux/singleCampus';
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
    this.props.updateCampus(this.props.id, { ...this.state });
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
    const { labelStyle } = customStyles;

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
const mapDispatch = (dispatch) => ({
  updateCampus: (id, state) => dispatch(updateCampus(id, state)),
});

export default connect(mapState, mapDispatch)(UpdateCampus);

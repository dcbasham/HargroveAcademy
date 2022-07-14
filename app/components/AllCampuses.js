import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../redux/campuses';
import AddCampus from './AddCampus';
import { Link } from 'react-router-dom';
export const linkStyle = {
  textDecoration: 'none',
};
// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    return (
      <div className="campusList">
        <div className="addForm">
          Add a campus here: <AddCampus />
        </div>
        <ul>
          {this.props.campuses.map((campus) => (
            <li key={campus.id}>
              <Link style={linkStyle} to={`campuses/${campus.id}`}>
                <h3>{campus.name}</h3>
              </Link>
              <p>{campus.description}</p>
              <img width="200" src={campus.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = ({ campuses }) => {
  return {
    campuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);

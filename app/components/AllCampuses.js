import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../redux/campuses';
// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <h3>{campus.name}</h3>
                <p>{campus.description}</p>
                <img width="200" src={campus.imageUrl} />
              </li>
            );
          })}
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

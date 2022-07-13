import React from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';

class Campus extends React.Component {
  componentDidMount() {
    console.log('this.props before thunk', this.props);
    const campusId = this.props.match.params.campusId;
    this.props.fetchCampus(campusId);
    console.log('this.props after thunked 2nd time', this.props);
  }
  render() {
    const campus = this.props.singleCampus;
    return (
      <div>
        <h3>The campus : {campus.name} </h3>
        <h4>{campus.address} </h4>
        <img width="200" src={campus.imageUrl} />
        <h5>
          {campus.students ? (
            <ul>
              {' '}
              Our Students:
              {campus.students.map((student) => {
                return (
                  <li key={student.id}>
                    <h3>
                      {student.firstName} {student.lastName}
                    </h3>
                  </li>
                );
              })}
            </ul>
          ) : (
            'No data for students yet'
          )}
        </h5>
      </div>
    );
  }
}
const mapState = ({ singleCampus }) => {
  return {
    singleCampus,
  };
};
const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchSingleCampus(id)),
});

export default connect(mapState, mapDispatch)(Campus);

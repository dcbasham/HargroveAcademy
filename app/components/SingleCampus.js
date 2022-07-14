import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';
import { Link } from 'react-router-dom';
class Campus extends React.Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    this.props.fetchCampus(campusId);
  }
  render() {
    const campus = this.props.singleCampus;
    return (
      <div className="single-view">
        <h3>Campus : {campus.name} </h3>
        <h4>{campus.address} </h4>
        <img width="200" src={campus.imageUrl} />
        {campus.students ? (
          <ul>
            {' '}
            Our Students:
            {campus.students.map((student) => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {' '}
                    <h3>
                      {student.firstName} {student.lastName}
                    </h3>{' '}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>No student data yet!</h3>
        )}
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

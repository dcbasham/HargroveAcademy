import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

const Routes = () => {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/campuses" className="nav-link">
                Campuses
              </Link>
            </li>{' '}
            |{' '}
            <li className="nav-item">
              <Link to="/students" className="nav-link">
                {' '}
                Students{' '}
              </Link>
            </li>{' '}
            |{' '}
            <li className="nav-item">
              <Link to="/home" className="nav-link light">
                Home{' '}
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />

            <Route exact path="/campuses" component={AllCampuses} />

            <Route
              exact
              path="/students/:studentId"
              component={SingleStudent}
            />
            <Route exact path="/students" component={AllStudents} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;

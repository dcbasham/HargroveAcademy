import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import { Home } from './Home.js';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { Navbar } from './NavBar';
export const customStyles = {
  linkStyle: {
    textDecoration: 'none',
    color: 'navy',
    padding: '0.25rem',
    fontStyle: 'italic',
  },
  fontStyle: {
    fontStyle: 'bold-italic',
    color: '#294C60',
    padding: '0.5rem',
    marginLeft: '0.5rem',
  },
  spacing: {
    marginLeft: '0.5rem',
    padding: '0.5rem',
  },
  labelStyle: {
    marginTop: '0.5rem',
    marginLeft: '0.25rem',
  },
};

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/campuses/:campusId"
              render={(routeProps) => (
                <SingleCampus customStyles={customStyles} {...routeProps} />
              )}
            />
            <Route
              exact
              path="/campuses"
              render={(routeProps) => (
                <AllCampuses customStyles={customStyles} {...routeProps} />
              )}
            />
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

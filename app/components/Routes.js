import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import { Home } from './Home.js';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { Navbar } from './NavBar';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
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

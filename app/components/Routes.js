import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/campuses">Campuses</Link> |
          <Link to="/students"> Students </Link> | <Link to="/home">Home </Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;

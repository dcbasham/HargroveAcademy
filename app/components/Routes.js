import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import { Home } from './Home';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import { Navbar } from './NavBar';
import Container from 'react-bootstrap/Container';
const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main className="bg-dark">
        <Switch>
          <Route exact path="/campuses/:campusId" component={SingleCampus} />

          <Route exact path="/campuses" component={AllCampuses} />

          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/campuses">Campuses</Link> | <Link to="/home">Home </Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
        <Route exact path="/campuses" component={AllCampuses} />
      </div>
    </Router>
  );
};

export default Routes;

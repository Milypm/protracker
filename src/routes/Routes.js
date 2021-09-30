/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Registration from '../containers/auth/Registration';
import Dashboard from '../containers/Dashboard';
import '../styles/main.css';
import '../styles/colorsAndFonts.css';
import '../styles/fonts/Helvetica-Bold.ttf';
import '../styles/fonts/Helvetica-Light.ttf';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route
        exact
        path="/"
        render={(props) => (
          <Home {...props} currentUser={currentUser} />
        )}
      /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/registrations" component={Registration} />
      {/* <Route
        exact
        path="/dashboard"
        render={(props) => <Dashboard {...props} />}
      /> */}
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/project-tasks" component={ProjectTasks} />
      <Route exact path="/project-tasks/:taskId/dev-tasks" component={DevTask} /> */}
    </Switch>
  </BrowserRouter>
);
export default Routes;

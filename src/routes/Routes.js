/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Registration from '../containers/auth/Registration';
import Dashboard from '../containers/Dashboard';
import '../styles/main.css';

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
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/projects/:projectId" component={Project} />
      <Route exact path="/project_tasks/:taskId" component={ProjectTask} /> */}
    </Switch>
  </BrowserRouter>
);
export default Routes;

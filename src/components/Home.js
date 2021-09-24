import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loading, Error } from './LoadingError';
import Login from '../containers/auth/Login';
import Dashboard from '../containers/Dashboard';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState('');
  useEffect(async () => {
    let check;
    try {
      const res = await axios.get('http://localhost:3001/logged_in');
      check = res.data.logged_in;
    } catch (error) {
      check = error.message;
    }
    setLoggedIn(check);
  }, []);
  const ifLoggedIn = () => {
    let show;
    if (!loggedIn) {
      show = (
        <div>
          <Login />
          <Link to="/registrations">Register</Link>
        </div>
      );
    } else if (loggedIn) {
      show = <Dashboard />;
    } else {
      show = <Error error={loggedIn} />;
    }
    return show;
  };
  return (
    <div>
      <h1>ProTracker</h1>
      {
        loggedIn === ''
          ? <Loading />
          : ifLoggedIn()
      }
    </div>
  );
};
export default Home;

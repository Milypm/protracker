import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Loading, Error } from '../components/LoadingError';
import Login from '../components/auth/Login';
import { newLogin } from '../actions/registrationAndLogin';
import { setDashboardPanelProjects, setDashboardPanelTasks } from '../actions/dashboardPanel';
import { getActiveProjects, getActiveTasks } from '../actions/activeProjectsOrTasks';
import '../styles/home/home.css';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const userData = useSelector((state) => state.currentUser.user);
  const loginStatus = useSelector((state) => state.currentUser.loading);
  const loginError = useSelector((state) => state.currentUser.error);
  // const dashboardPanelProjects = useSelector((state) => state.dashboardPanel.dashboardDisplay);
  // const dashboardPanelTasks = useSelector((state) => state.dashboardPanelTasks.dashboardDisplay);
  const dispatch = useDispatch();
  // console.log('check', dashboardPanelPjs, userData.user);
  useEffect(() => {
    console.log('useEffect happens');
    let mounted = true;
    if (userData.user !== undefined) {
      if (userData.user.role === 'Project Manager' && mounted) {
        dispatch(getActiveProjects(userData.user.id));
        // console.log('userData.user.role', userData.user.role);
        dispatch(setDashboardPanelProjects(userData.user.role));
      } else if (userData.user.role === 'Software Engineer' && mounted) {
        dispatch(getActiveTasks(userData.user.name));
        dispatch(setDashboardPanelTasks(userData.user.role));
      }
    }
    mounted = false;
    return mounted;
  }, [userData]);

  // useEffect(() => {}, [dashboardPanelPjs, dashboardPanelTasks]);

  const loginCheck = async () => {
    try {
      const response = await axios.get('http://localhost:3001/logged_in');
      setLoggedIn(response.data.logged_in);
    } catch (error) {
      setLoggedIn(error.message);
    }
  };

  if (loggedIn === '') {
    loginCheck();
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'password':
        return setPassword(event.target.value);
      default:
        return '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user: {
        name,
        password,
      },
    };
    await dispatch(newLogin(data));
  };

  const ifLoggedIn = () => {
    let show;
    if (typeof loggedIn === 'boolean') {
      if (!loggedIn && loginStatus === undefined) {
        show = (
          <div className="login">
            <Login
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              name={name}
              password={password}
            />
            <Link to="/registrations">Register</Link>
          </div>
        );
      } else if (loginStatus) {
        show = <Loading />;
      } else if (!loginStatus && loginError === undefined) {
        show = (
          <Redirect to="/dashboard" />
        );
      } else if (!loginStatus && loginError !== undefined) {
        show = <Error error={loginError} />;
      }
    } else if (typeof loggedIn !== 'boolean') {
      if (loggedIn === undefined) {
        show = <Loading />;
      }
    }
    return show;
  };

  return (
    <div className="home blue-hard">
      <div className="home-internaldiv">
        <h1>ProTracker</h1>
        { ifLoggedIn() }
      </div>
    </div>
  );
};
export default Home;

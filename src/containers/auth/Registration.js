import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { newRegistration } from '../../actions/registrationAndLogin';
import { setDashboardPanelProjects, setDashboardPanelTasks } from '../../actions/dashboardPanel';
import { getActiveProjects, getActiveTasks } from '../../actions/activeProjectsOrTasks';
import { Loading, Error } from '../../components/LoadingError';
import '../../styles/home/registration.css';

const Registration = () => {
  const userData = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  const [loginRequestSts, setLoginRequestSts] = useState(false);
  useEffect(async () => {
    if (loginRequestSts) {
      if (userData.user.role === 'Project Manager') {
        await dispatch(getActiveProjects(userData.user.id));
        await dispatch(setDashboardPanelProjects(userData.user.role));
      } else {
        await dispatch(getActiveTasks(userData.user.name));
        await dispatch(setDashboardPanelTasks(userData.user.role));
      }
    }
  }, [loginRequestSts]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user: {
        name,
        password,
        passwordConfirmation,
        role,
      },
    };
    dispatch(newRegistration(data));
    setLoginRequestSts(true);
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'password':
        return setPassword(event.target.value);
      case 'passwordConfirmation':
        return setPasswordConfirmation(event.target.value);
      case 'role':
        return setRole(event.target.value);
      default:
        return '';
    }
  };
  const display = () => {
    let show;
    if (userData.loading === undefined) {
      show = (
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            value={passwordConfirmation}
            onChange={handleChange}
            required
          />
          <select name="role" onChange={handleChange} value={role}>
            <option value="" disabled hidden>Role</option>
            <option>Software Engineer</option>
            <option>Project Manager</option>
          </select>
          <button type="submit">Register</button>
        </form>
      );
    } else if (userData.loading !== undefined) {
      if (userData.loading) {
        show = <Loading />;
      } else if (!userData.loading && userData.error === undefined) {
        show = <Redirect to="/dashboard" />;
      } else if (!userData.loading && userData.error !== undefined) {
        show = <Error error={userData.error} />;
      }
    }
    return show;
  };
  return (
    <div>
      <h1>ProTracker</h1>
      { display() }
    </div>
  );
};
export default Registration;

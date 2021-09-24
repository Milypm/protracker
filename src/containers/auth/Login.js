import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newLogin } from '../../actions/registrationAndLogin';
import setDashboardPanel from '../../actions/dashboardPanel';
import { getActiveProjects, getActiveTasks } from '../../actions/activeProjectsOrTasks';
import { Error } from '../../components/LoadingError';

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user: {
        name,
        password,
      },
    };
    dispatch(newLogin(data));
    const currentUser = useSelector((state) => state.currentUser.user);
    if (currentUser.error) {
      setLoginError(currentUser.error);
    }
    if (currentUser.user.role === 'Project Manager') {
      dispatch(getActiveProjects(currentUser.user.id));
    } else {
      dispatch(getActiveTasks(currentUser.user.name));
    }
    dispatch(setDashboardPanel(currentUser.user.role));
  };
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
  return (
    <div>
      {
        loginError !== ''
          ? <Error error={loginError} />
          : ''
      }
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;

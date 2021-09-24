import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { newRegistration } from '../../actions/registrationAndLogin';
import setDashboardPanel from '../../actions/dashboardPanel';

const Registration = () => {
  const currentUser = useSelector((state) => state.currentUser.user);
  const status = currentUser !== undefined ? currentUser.status : '';
  // const { loading, error } = currentUser;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  // const [registrationErrors, setRegistrationErrors] = useState('');
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
    dispatch(setDashboardPanel(data.user.role));
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
  return (
    <div>
      {
        status === 'created'
          ? <Redirect to="/dashboard" />
          : (
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
          )
      }
    </div>
  );
};
export default Registration;

import React, { useState } from 'react';
import { newRegistration } from '../../API/registration';

const Registration = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  // const [registrationErrors, setRegistrationErrors] = useState('');
  // useEffect(() => {
  //   setName(name);
  //   setPassword(password);
  //   setPasswordConfirmation(passwordConfirmation);
  //   setRole(role);
  // }, [name, password, passwordConfirmation, role]);
  const handleSubmit = (event) => {
    const data = {
      user: {
        name,
        password,
        passwordConfirmation,
        role,
      },
    };
    console.log('data obj', data);
    // newRegistration(data);
    console.log('registration response', newRegistration(data));
    event.preventDefault();
  };
  const handleChange = (event) => {
    // console.log('handleChange', event);
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
    </div>
  );
};
export default Registration;

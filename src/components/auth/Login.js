import PropTypes from 'prop-types';
import '../../styles/home/login.css';

const Login = (props) => {
  const {
    handleSubmit, handleChange, name, password,
  } = props;
  return (
    // <div className="login">
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => handleChange(e)}
        required
      />
      <button type="submit">Login</button>
    </form>
    // </div>
  );
};
Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default Login;

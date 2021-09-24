import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActiveProject = (props) => {
  const {
    projectId, name, deadline, status, onClickHandler,
  } = props;
  return (
    <Link to={`/projects/${projectId}`} className="activeItem" onClick={() => onClickHandler(projectId)}>
      <h3 className="activeItem-name">{name}</h3>
      <p className="activeItem-deadline">{deadline}</p>
      <p className="activeItem-status">{status}</p>
    </Link>
  );
};
// activeProject.defaultProps = {
//   name: '',
//   img: '',
//   id: '',
//   onClickHandler: () => {},
// };
ActiveProject.propTypes = {
  projectId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default ActiveProject;

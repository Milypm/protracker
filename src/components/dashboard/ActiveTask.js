import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActiveTask = (props) => {
  const {
    taskId, task, status, onClickHandler,
  } = props;
  return (
    <Link to={`/project_tasks/${taskId}`} className="activeItem" onClick={() => onClickHandler(taskId)}>
      <h3 className="activeItem-name">{task}</h3>
      <p className="activeItem-status">{status}</p>
    </Link>
  );
};
// activeTask.defaultProps = {
//   name: '',
//   img: '',
//   id: '',
//   onClickHandler: () => {},
// };
ActiveTask.propTypes = {
  taskId: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default ActiveTask;

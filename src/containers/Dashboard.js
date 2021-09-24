// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectTasks, getDevTask } from '../actions/projectOrDevTasks';
import Navbar from '../components/Navbar';
import ActiveProject from '../components/dashboard/ActiveProject';
import ActiveTask from '../components/dashboard/ActiveTask';

const Dashboard = () => {
  const dashboardPanel = useSelector((state) => state.dashboardPanel.dashboardDisplay);
  const activeProjectsOrTasks = useSelector((state) => state.activeProjectsOrTasks.activePjsOrTks);
  const dispatch = useDispatch();
  const dispatches = useCallback((id) => {
    if (dashboardPanel === 'Active Projects') {
      dispatch(getProjectTasks(id));
    } else {
      dispatch(getDevTask(id));
    }
  }, []);
  return (
    <div className="dashboard">
      <Navbar />
      <section className="dashboard-activePanel">
        {
          dashboardPanel === 'Active Projects'
            ? (
              activeProjectsOrTasks.map((obj) => (
                <ActiveProject
                  key={obj.id}
                  projectId={obj.id}
                  name={obj.name}
                  deadline={obj.deadline}
                  status={obj.status}
                  onClickHandler={dispatches}
                />
              ))
            )
            : (
              activeProjectsOrTasks.map((obj) => (
                <ActiveTask
                  key={obj.id}
                  taskId={obj.id}
                  task={obj.task}
                  status={obj.status}
                  onClickHandler={dispatches}
                />
              ))
            )
        }
      </section>
    </div>
  );
};
Dashboard.propTypes = {
  // currentUser: PropTypes.shape({
  //   user: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired,
  //     role: PropTypes.string.isRequired,
  //   }).isRequired,
  // }).isRequired,
  // dashPanel: PropTypes.string.isRequired,
};
export default Dashboard;

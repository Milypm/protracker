// import React, { useState, useEffect } from 'react';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectTasks, getDevTask } from '../actions/projectOrDevTasks';
import Navbar from '../components/Navbar';
import { Loading, Error } from '../components/LoadingError';
import ActiveProject from '../components/dashboard/ActiveProject';
import ActiveTask from '../components/dashboard/ActiveTask';

const Dashboard = () => {
  const dashboardPanelPjs = useSelector((state) => state.dashboardPanelProjects.dashboardDisplay);
  const dashboardPanelTasks = useSelector((state) => state.dashboardPanelTasks.dashboardDisplay);
  const loadingStatus = useSelector((state) => state.activeProjectsOrTasks.loading);
  const loadingError = useSelector((state) => state.activeProjectsOrTasks.error);
  const activeProjectsOrTasks = useSelector((state) => state.activeProjectsOrTasks.activePjsOrTks);
  const dispatch = useDispatch();
  const dispatches = useCallback((id) => {
    if (dashboardPanelPjs === 'Project Manager' && dashboardPanelTasks === '') {
      dispatch(getProjectTasks(id));
    } else if (dashboardPanelTasks === 'Software Engineer' && dashboardPanelPjs === '') {
      dispatch(getDevTask(id));
    }
  }, []);
  const display = () => {
    let show;
    if (loadingStatus === undefined || loadingStatus) {
      show = <Loading />;
    } else if (!loadingStatus && loadingError !== undefined) {
      show = <Error />;
    } else if (!loadingStatus && loadingError === undefined) {
      if (dashboardPanelPjs === 'Project Manager' && dashboardPanelTasks === '') {
        show = activeProjectsOrTasks.map((obj) => (
          <ActiveProject
            key={obj.id}
            projectId={obj.id}
            name={obj.name}
            deadline={obj.deadline}
            status={obj.status}
            onClickHandler={dispatches}
          />
        ));
      } else if (dashboardPanelTasks === 'Software Engineer' && dashboardPanelPjs === '') {
        show = activeProjectsOrTasks.map((obj) => (
          <ActiveTask
            key={obj.id}
            taskId={obj.id}
            task={obj.task}
            status={obj.status}
            onClickHandler={dispatches}
          />
        ));
      }
    }
    return show;
  };
  return (
    <div className="dashboard">
      <Navbar />
      <section className="dashboard-activePanel">
        { display() }
      </section>
    </div>
  );
};
export default Dashboard;

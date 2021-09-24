import { PM_DASHBOARD_PANEL, DEV_DASHBOARD_PANEL } from './types';

const setDashboardPanel = (role) => (dispatch) => {
  const res = role === 'Project Manager'
    ? dispatch({ type: PM_DASHBOARD_PANEL, payload: 'Active Projects' })
    : dispatch({ type: DEV_DASHBOARD_PANEL, payload: 'Active Tasks' });
  return res;
};
export default setDashboardPanel;

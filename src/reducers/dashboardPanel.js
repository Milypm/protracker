import { PM_DASHBOARD_PANEL, DEV_DASHBOARD_PANEL } from '../actions/types';

const dashboardPanelReducer = (state = { dashboardDisplay: '' }, action) => {
  switch (action.type) {
    case PM_DASHBOARD_PANEL:
      return { dashboardDisplay: action.payload };
    case DEV_DASHBOARD_PANEL:
      return { dashboardDisplay: action.payload };
    default:
      return state;
  }
};
export default dashboardPanelReducer;

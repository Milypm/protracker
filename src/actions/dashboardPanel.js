import { PM_DASHBOARD_PANEL, DEV_DASHBOARD_PANEL } from './types';

export const setDashboardPanelProjects = (role) => ({ type: PM_DASHBOARD_PANEL, payload: role });
export const setDashboardPanelTasks = (role) => ({ type: DEV_DASHBOARD_PANEL, payload: role });

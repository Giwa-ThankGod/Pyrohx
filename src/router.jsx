import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/main';
import ScheduleCall from './pages/schedule-call';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/schedule-call",
        element: <ScheduleCall />,
      },
    ],
  }
]);

export default router;
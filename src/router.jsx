import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/main';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  }
]);

export default router;
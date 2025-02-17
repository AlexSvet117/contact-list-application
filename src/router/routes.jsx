import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from '../pages/home/Home.jsx';
import Signup from '../pages/signup/Signup.jsx';
import Login from '../pages/login/Login.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { path: true, element: <Login /> },
      { index: '/signup', element: <Signup /> },
      { path: '/login', element: <Login /> },
      { path: '/home', element: <Home /> },
    ],
  },
]);

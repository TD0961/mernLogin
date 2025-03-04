import React from 'react';
import './App.css';

/**import the components */
import Username from "./component/Username"
import Reset from "./component/Reset"
import Register from "./component/Register"
import Recovery from "./component/Recovery"
import Profile from "./component/Profile"
import Password from "./component/Password"
import PageNotFound from "./component/PageNotFound"
import Login from "./component/Login"


/**routes */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/reset',
    element: <Reset></Reset>,
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },
  {
    path: '/password',
    element: <Password></Password>,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);


function App() {
  return (
    <main>
          <RouterProvider router={router} />
    </main>
  );
}

export default App;
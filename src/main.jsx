import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenet/Root/Root.jsx';
import Home from './Componenet/Home/Home.jsx';
import Register from './Componenet/Register/Register.jsx';
import Login from './Componenet/Login/Login.jsx';
import HeroRegister from './Componenet/HeroRegister/HeroRegister.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>,

      },
      {
        path:'/heroRegister',
        element:<HeroRegister></HeroRegister>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

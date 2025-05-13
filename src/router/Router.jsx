import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import JobDetails from '../pages/jobdetails/JobDetails';

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Not found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
           path:'/jobs/:id',
           element:<JobDetails></JobDetails>,
           loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'signin',
          element:<Login></Login>
        }
       
      ]
    },
  ]);


export default Router;
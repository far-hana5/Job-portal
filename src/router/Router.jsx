import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import JobDetails from '../pages/jobdetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../pages/jobapply/JobApply';
import MyApplications from '../pages/MyApplications/MyApplications'
import AddJob from '../pages/AddJob/AddJob'
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs'
import ViewApplications from '../pages/ViewApplications/ViewApplications'




/*
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
*/
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
           element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
           loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
         {
        path: 'jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
        path: 'myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
        path: 'addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: 'viewApplications/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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

/*

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: 'myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: 'viewApplications/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);
*/
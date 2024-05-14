
import {createBrowserRouter} from "react-router-dom"
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";


import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPost/MyPostedJobs";
import UpdateJob from "../Pages/Update/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../Pages/Bids/MyBids";
import BidRequests from "../Pages/Bids/BidRequests";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Registration></Registration>
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        }, {
          path: '/addjob',
          element: <PrivateRoutes><AddJob/></PrivateRoutes>
        }, {
          path: '/mypost',
          element: <PrivateRoutes><MyPostedJobs/></PrivateRoutes>
        }, {
          path: '/updatejob/:id',
          element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes> ,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        }, {
          path: '/mybids',
          element: <PrivateRoutes><MyBids/></PrivateRoutes>
        },
        {
          path: '/bidrequests',
          element: <PrivateRoutes><BidRequests/></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router
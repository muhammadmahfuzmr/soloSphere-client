
import {createBrowserRouter} from "react-router-dom"
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";


import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import AddJob from "../Pages/AddJob/AddJob";

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
          element: <JobDetails></JobDetails>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        }, {
          path: '/addjob',
          element: <AddJob></AddJob>
        }
      ]
    },
  ]);

  export default router
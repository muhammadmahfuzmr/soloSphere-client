
import {createBrowserRouter} from "react-router-dom"
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";


import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Registration></Registration>
        }
      ]
    },
  ]);

  export default router
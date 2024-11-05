import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login_Registration/Login";
import Registration from "../Pages/Login_Registration/Registration";
import Not_Founded_Page from "../Pages/Not_Founded_Page/Not_Founded_Page.jsx/Not_Founded_Page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path: "/Login",
            element: <Login></Login>
        },
        {
            path: "/Registration",
            element: <Registration></Registration>
        },
        
      ]
    },
    {
      path: "*",
      element: <Not_Founded_Page></Not_Founded_Page>
    }
]);


export default router;
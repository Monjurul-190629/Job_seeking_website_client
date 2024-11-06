import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login_Registration/Login";
import Registration from "../Pages/Login_Registration/Registration";
import Not_Founded_Page from "../Pages/Not_Founded_Page/Not_Founded_Page.jsx/Not_Founded_Page";
import Add_a_job from "../Pages/Add_a_job/Add_a_job";
import Alljobs from "../Pages/All_Jobs/All_jobs";
import ViewDetails from "../Pages/All_Jobs/ViewDetails";
import PrivateRoute from "../Provider/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Registration",
        element: <Registration></Registration>
      },
      {
        path: "/Add_a_job",
        element: <Add_a_job></Add_a_job>
      },
      {
        path: "/All_jobs",
        element : <Alljobs></Alljobs>,
        loader : () => fetch("http://localhost:5000/jobs")
      },
      {
        path: "ViewDetails/:id",
        element : <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader : () => fetch("http://localhost:5000/jobs")
      },
      

    ]
  },
  {
    path: "*",
    element: <Not_Founded_Page></Not_Founded_Page>
  }
]);


export default router;
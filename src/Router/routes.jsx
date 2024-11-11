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
import Applied_jobs from "../Applied_jobs/Applied_jobs";
import My_jobs from "../My_jobs/My_jobs";
import Update from "../My_jobs/Update";

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
        loader : () => fetch("https://jobseekingserver.vercel.app/jobs")
      },
      {
        path: "ViewDetails/:id",
        element : <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader : () => fetch("https://jobseekingserver.vercel.app/jobs")
      },
      {
        path: "/Applied_jobs",
        element : <PrivateRoute><Applied_jobs></Applied_jobs></PrivateRoute>
      },
      {
        path: "/My_jobs",
        element: <PrivateRoute><My_jobs></My_jobs></PrivateRoute>
      },
      {
        path: "/update/:id",
        element : <Update></Update>,
        loader : ({params}) => fetch(`https://jobseekingserver.vercel.app/jobs/${params.id}`)
      },
      

    ]
  },
  {
    path: "*",
    element: <Not_Founded_Page></Not_Founded_Page>
  }
]);


export default router;
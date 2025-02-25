import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Dashboard/pages/Dashboard";
import UserDetails from "../pages/Dashboard/pages/UserDetails";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <UserDetails />,
      },
    ],
  },
]);

export default router;

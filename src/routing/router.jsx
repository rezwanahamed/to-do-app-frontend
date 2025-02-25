import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Home/LandingPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Dashboard/pages/Dashboard";
import UserDetails from "../pages/Dashboard/pages/UserDetails";
import DashboardLayout from "./layouts/DashboardLayout";
import Settings from "../pages/Dashboard/pages/Settings";
import AddTodo from "../pages/Dashboard/pages/AddTodo";

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
      {
        path: "add-todo",
        element: <AddTodo />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;

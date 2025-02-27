import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import QrVerification from "../pages/Authentication/QrVerification";
import Register from "../pages/Authentication/Register";
import AddTodo from "../pages/Dashboard/pages/AddTodo";
import Dashboard from "../pages/Dashboard/pages/Dashboard";
import Settings from "../pages/Dashboard/pages/Settings";
import UserDetails from "../pages/Dashboard/pages/UserDetails";
import LandingPage from "../pages/Home/LandingPage";
import ProtectedRoute from "../ProtectedRoute";
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
    path: "/qr-verification",
    element: <QrVerification />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            {" "}
            <UserDetails />,
          </ProtectedRoute>
        ),
      },
      {
        path: "add-todo",
        element: (
          <ProtectedRoute>
            {" "}
            <AddTodo />,
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

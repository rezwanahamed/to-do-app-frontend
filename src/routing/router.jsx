import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import QrVerification from "../pages/Authentication/QrVerification";
import Register from "../pages/Authentication/Register";
import AddTodo from "../pages/Dashboard/pages/AddTodo";
import CompletedTasks from "../pages/Dashboard/pages/CompletedTasks";
import Dashboard from "../pages/Dashboard/pages/Dashboard";
import HighPriorityTask from "../pages/Dashboard/pages/HighPriorityTask";
import LowPriorityTask from "../pages/Dashboard/pages/LowPriorityTask";
import MediumPriorityTask from "../pages/Dashboard/pages/MediumPriorityTask";
import PendingTasks from "../pages/Dashboard/pages/PendingTasks";
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
            <AddTodo />,
          </ProtectedRoute>
        ),
      },
      {
        path: "pending-tasks",
        element: (
          <ProtectedRoute>
            <PendingTasks />,
          </ProtectedRoute>
        ),
      },
      {
        path: "high-priority-task",
        element: (
          <ProtectedRoute>
            <HighPriorityTask />,
          </ProtectedRoute>
        ),
      },
      {
        path: "medium-priority-task",
        element: (
          <ProtectedRoute>
            <MediumPriorityTask />,
          </ProtectedRoute>
        ),
      },
      {
        path: "low-priority-task",
        element: (
          <ProtectedRoute>
            <LowPriorityTask />,
          </ProtectedRoute>
        ),
      },
      {
        path: "completed-tasks",
        element: (
          <ProtectedRoute>
            <CompletedTasks />,
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

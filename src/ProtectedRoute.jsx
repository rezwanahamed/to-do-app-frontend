// src/ProtectedRoute.js
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import appRoutes from "../lib/config/route";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  // Show loading state while authentication is being checked
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Once loading is complete, either render children or redirect
  return isAuthenticated ? children : <Navigate to={appRoutes.login} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { decryptData } from "../../utils/functions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const decryptToken = decryptData(token); // decrypt the token before using it

  // Check if the user is authenticated
  const isAuthenticated = !!token;


  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // Fetch user details using the token
  useEffect(() => {
    if (decryptToken) {
      // Fetch user details from your backend
      fetch("http://localhost:5000/api/user/profile/", { // need to make it dynamic 
        headers: {
          Authorization: `Bearer ${decryptToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => {
          console.error("Error fetching user details:", error);
          logout(); // Log out if the token is invalid
        });
    }
  }, [decryptToken]);

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

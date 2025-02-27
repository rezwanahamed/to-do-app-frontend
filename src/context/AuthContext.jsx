import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import appRoutes from "../../lib/config/route";
import { decryptData } from "../../utils/functions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [decryptToken, setDecryptToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle token decryption
  useEffect(() => {
    if (token) {
      const decrypt = decryptData(token);
      setDecryptToken(decrypt);
    } else {
      setDecryptToken(null);
      setIsAuthenticated(false);
      setIsLoading(false); // Not loading anymore if no token exists
    }
  }, [token]);

  // Fetch user details using the decrypted token
  useEffect(() => {
    if (decryptToken) {
      const fetchUserDetails = async () => {
        setIsLoading(true); // Start loading
        try {
          const response = await fetch(
            "http://localhost:5000/api/user/profile/",
            {
              headers: {
                Authorization: `Bearer ${decryptToken}`,
              },
            },
          );

          console.log(response);

          if (!response.ok) {
            window.location.href = appRoutes.login;
            setIsLoading(false);
            return;
          }

          const data = await response.json();
          setUser(data);
          setIsAuthenticated(true);
          setIsLoading(false); // End loading after successful fetch
        } catch (error) {
          console.error("Error fetching user details:", error);
          logout(); // Log out if the token is invalid
          setIsLoading(false); // End loading after error
        }
      };

      fetchUserDetails();
    }
  }, [decryptToken]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
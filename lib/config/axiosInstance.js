import axios from "axios";
import { decryptData } from "../../utils/functions";
let decryptToken;
const localStorageData = localStorage.getItem("token");
if (localStorageData) {
  decryptToken = decryptData(localStorageData);
}

// Create a custom axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for adding auth tokens, logging, etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage or any state management solution

    // If token exists, add it to the headers
    if (decryptToken) {
      config.headers.Authorization = `Bearer ${decryptToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify successful responses here before they're returned
    return response;
  },
  (error) => {
    // Handle common errors like 401, 403, 500, etc.
    if (error.response) {
      // Server responded with an error status code
      switch (error.response.status) {
        case 401:
          // Handle unauthorized - perhaps redirect to login
          console.log("Unauthorized. Redirecting to login...");
          // Example: history.push('/login');
          break;
        case 403:
          // Handle forbidden
          console.log("Forbidden access");
          break;
        case 404:
          // Handle not found
          console.log("Resource not found");
          break;
        case 500:
          // Handle server error
          console.log("Server error");
          break;
        default:
          // Handle other errors
          console.log(`Error with status code: ${error.response.status}`);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.log("No response received from server");
    } else {
      // Something else caused the error
      console.log("Error during request setup:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

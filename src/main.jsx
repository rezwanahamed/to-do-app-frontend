import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./app";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <App />
    </AuthProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/index.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>,
);

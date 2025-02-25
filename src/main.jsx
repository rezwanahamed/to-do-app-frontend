import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import About from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);

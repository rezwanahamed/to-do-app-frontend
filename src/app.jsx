import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import "./styles/index.css";

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

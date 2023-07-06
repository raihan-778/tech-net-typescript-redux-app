import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
export default routes;

import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from "prop-types";
import Mian from "./Layout/Mian.jsx";
import Home from "./component/Home/Home.jsx";
import Register from "./component/Register/Register.jsx";
import Register2 from "./component/Register2/Register2.jsx";
import Login from "./component/Login/Login.jsx";
import Error from "./component/Error/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian></Mian>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register2",
        element: <Register2></Register2>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

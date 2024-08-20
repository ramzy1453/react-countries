import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutUs from "./Pages/AboutUs";
import CountryDetails from "./Pages/CountryDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 1

const router = createBrowserRouter([
  // 2
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/country/:name",
    element: <CountryDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// 3
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

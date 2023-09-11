import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Film from "./pages/Film";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovie from "./pages/AddMovie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/watchFilm/:videoName",
    element: <Film />,
  },
  {
    path: "/addFilm",
    element: <AddMovie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

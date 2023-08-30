import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Accounts from "./components/Accounts/Accounts.jsx";
import Error from "./components/Error/Error.jsx";
import Login from "./components/Login/Login.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Home from "./components/Home/Home.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import CreateTimeline from "./components/CreateTimeline/CreateTimeline.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/support",
        element: <Timeline />,
      },
      {
        path: "/createTimeline",
        element: <CreateTimeline />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

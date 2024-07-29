import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/common.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

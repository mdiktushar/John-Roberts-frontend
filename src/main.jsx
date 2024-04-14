import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#f2f5f7] min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={PublicRoutes} />
      </div>
    </div>
  </React.StrictMode>
);

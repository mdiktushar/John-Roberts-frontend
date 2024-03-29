import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/public/Home/Home";

const PublicRoutes = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
        loader: async () => await fetch(`./data/books.json`),
      },
    ],
  },
]);

export default PublicRoutes;

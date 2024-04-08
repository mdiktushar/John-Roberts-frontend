import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/public/Home/Home";
import Books from "../pages/public/Books/Books";
import AboutAuthor from "../pages/public/AboutAuthor/AboutAuthor";

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
      {
        path: 'books',
        element: <Books />,
        loader: async () => await fetch(`./data/books.json`),
      },
      {
        path: 'about-author',
        element: <AboutAuthor />,
        loader: async () => await fetch(`./data/author.json`),
      }
    ],
  },
]);

export default PublicRoutes;

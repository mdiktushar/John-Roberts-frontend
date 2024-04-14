import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/public/Home/Home";
import Books from "../pages/public/Books/Books";
import AboutAuthor from "../pages/public/AboutAuthor/AboutAuthor";
import Blog from "../pages/public/Blog/Blog";
import Contact from "../pages/public/Contact/Contact";

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
        path: "books",
        element: <Books />,
        loader: async () => await fetch(`./data/books.json`),
      },
      {
        path: "about-author",
        element: <AboutAuthor />,
        loader: async () => await fetch(`./data/author.json`),
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => await fetch(`./data/blogs.json`),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",

      },
    ],
  },
]);

export default PublicRoutes;

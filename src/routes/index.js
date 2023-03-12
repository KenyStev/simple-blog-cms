import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../templates/Layout";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../templates/Layout";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { BlogPost } from "../pages/BlogPost";
import { CreateEditPost } from "../pages/CreateEditPost";

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
      {
        path: "blog/new",
        element: <CreateEditPost />,
      },
      {
        path: "blog/:id/edit",
        element: <CreateEditPost edit />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
    ],
  },
]);

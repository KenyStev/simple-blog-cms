import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../templates/Layout";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { BlogPost } from "../pages/BlogPost";

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
        path: "blog/:id",
        element: (
          <BlogPost
            htmlContent={`<div style="max-width: 40rem; margin: 0 auto;">
        <h1 style="line-height: 1.3; margin: 4rem 0 2rem;">Lightweight. Loaded with features. Optimized for mobile.</h1>
        <p style="line-height: 1.5;">Over <span class="mce-annotation tox-comment" data-mce-annotation-uid="mce-conversation_37026667421657461494027" data-mce-annotation="tinycomments">1.5M developers agree</span> TinyMCE is the rich text editor of choice. With an open-source core and additional premium add-ons, TinyMCE scales with your app as you grow.</p>
        <div style="width: 100%; display: flex; flex-wrap: wrap;">
        <div style="flex: 1;">
        <p style="line-height: 1.5;">Use TinyMCE as:</p>
        <ul>
        <li style="margin: 10px 0;"><span style="font-size: 18px;">A <strong>basic</strong> editor</span></li>
        <li style="margin: 10px 0;"><span style="font-size: 18px;">An advanced 📝 editor</span></li>
        <li style="margin: 10px 0;"><span style="font-size: 18px;">A <span class="mention" data-mention-user-id="RosalinaMartel">@collaborative</span> editor</span></li>
        <li style="margin: 10px 0;"><span style="font-size: 18px;">A totally <span style="color: #00bc84; font-size: 16px;"><code>&lt;customized&gt;</code></span> editor</span></li>
        </ul>
        <p style="font-size: 24px; line-height: 1.3;"><strong>Try out this demo to see how it works!</strong></p>
        </div>
        <div><img style="max-width: 100%;" role="presentation" src="blob:https://www.tiny.cloud/29b2a828-967a-43a5-9173-13e838d9ef95" alt="" width="316"></div>
        </div>
        </div>`}
          />
        ),
      },
    ],
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Contact from "./routes/Contact.tsx";
import About from "./routes/About.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"about",
        element: <About />
      }
    ]
  }
  
])


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import CarModels from "./pages/CarModels.tsx";
import Testimonials from "./pages/Testimonials.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "car-models",
        element: <CarModels />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

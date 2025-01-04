import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import RootLayouts from "./layouts/RootLayouts";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ServiceBrands from "./pages/ServiceBrands";
// import SingleMain from "./pages/SingleMain";
// import Portfolio from "./pages/Portfolio";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service-brands",
          element: <ServiceBrands />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/design-service",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/batafsil/:id",
          element: <SingleMain />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

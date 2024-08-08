import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
/***
 * Header
 *  Logo
 *  Nav Items
 *  Cart
 * Body
 *  Search
 *  RestaurantContainer
 *      RestaurantCard
 *          Res-Image
 *          Star Rating
 *          Cuisines
 *          Name of res
 *          Delivery Time
 * Footer
 *  CopyRight
 *  Contact
 *  Address
 * FoodOrderingApp/Assets
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);

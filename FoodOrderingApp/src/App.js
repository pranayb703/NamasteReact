import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
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
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //Lets assume we made an authentication call
    const data = {
      name: "Pranay",
    };

    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);

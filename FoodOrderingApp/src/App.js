import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);

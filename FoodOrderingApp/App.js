import React from "react";
import ReactDOM  from 'react-dom/client';

/***
 * Header
 *  Logo 
 *  Nav Items
 *  Cart
 * Body
 *  Search
 *  RestaurantContainer
 *      RestaurantCard
 * Footer
 *  CopyRight
 *  Contact
 *  Address
 */

const App = () => {
    return (<h1>Food Ordering App</h1>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
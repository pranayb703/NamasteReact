import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Header = () => {
  // const btnName = "Login";

  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    //console.log("Use effect header");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                if (
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                );
              }}
              className="login"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

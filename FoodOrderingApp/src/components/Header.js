import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  // const btnName = "Login";

  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // useEffect(() => {
  //   //console.log("Use effect header");
  // }, [btnName]);
  return (
    <div className="header flex bg-red-500 text-white items-center">
      <div className="logo-container">
        <img className="logo w-32 rounded-lg m-4" src={LOGO_URL} />
      </div>
      <div className="nav-items align-middle`">
        <ul
          className="flex
        "
        >
          <li className="mx-2 px-2">
            Online Status : {onlineStatus ? " 🟢 " : " 🔴 "}
          </li>
          <li className="mx-2 px-2 rounded-lg hover:bg-blue-500 hover:text-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 px-2 rounded-lg hover:bg-blue-500 hover:text-white ">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 px-2 rounded-lg hover:bg-blue-500 hover:text-white ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 px-2 rounded-lg hover:bg-blue-500 hover:text-white ">
            <Link to="/cart">Cart-{cartItems.length} Items</Link>
          </li>

          <li className="mx-2 px-2">
            <button
              onClick={() => {
                if (
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                );
              }}
              className="border-solid rounded-md border-sky-500 bg-blue-500 text-white w-32 h-8 hover:bg-blue-950 p-1"
            >
              {btnName}
            </button>
          </li>
          <li className="mx-2 px-2 rounded-lg hover:bg-blue-500 hover:text-white ">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

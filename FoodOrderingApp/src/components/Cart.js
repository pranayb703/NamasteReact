import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  //Lets subscribe to store using useSelector

  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("Handle clear cart");
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center p-8 m-auto">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto p-2">
        <button
          className="bg-black text-white rounded-lg p-2"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 ? (
          <h2>No items added to cart.</h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;

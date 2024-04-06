import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 w-[60vw] m-auto p-4 mt-6">
      <div className="flex">
        <h1 className="font-bold font-serif  text-2xl">Cart</h1>
        <button
          className="h-8 w-24 bg-cyan-300 ml-10 rounded-lg font-medium font-serif hover:bg-cyan-500 hover:text-white"
          onClick={handleClearCart}
        >
          All Clear
        </button>
      </div>
      <div className="mt-20">
        <ItemList items={cartItems} flag = {true}/>
        {cartItems.length === 0 ? <div className="font-mono text-white text-3xl bg-gray-900 p-2">Your Cart is Empty  </div> : null}
      </div>
    </div>
  );
};

export default Cart;

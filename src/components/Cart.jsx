import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <div>
            <Link to={`/product/${item.id}`}>
              <h3 className="font-bold">{item.name}</h3>
            </Link>
            <p>Price: ${item.price}</p>
            <div className="flex items-center">
              <p>Quantity: </p>
              <button onClick={() => decreaseQuantity(item)} className="mx-2 bg-red-500 text-white px-2  rounded">-</button>
              <p>{item.quantity}</p>
              <button onClick={() => increaseQuantity(item)} className="mx-2 bg-green-500 text-white px-2 rounded">+</button>
            </div>
          </div>
          <div>
            <button onClick={() => handleRemove(item)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <h2 className="text-xl font-bold">Total</h2>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../useCart";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border p-4 rounded-md shadow-md"
              >
                {/* Product Image */}
                <img
                  src={item.thumbnail} // Ensure each item in cart has an image property
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${Number(item.price).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

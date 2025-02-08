// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { FaCheckCircle, FaEdit, FaSave } from "react-icons/fa";
import { useCart } from "../../useCart";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for Delivery & Billing Address
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "John Doe",
    address: "123 Street, City, Country",
    phone: "+123 456 7890",
  });

  const [billingInfo, setBillingInfo] = useState("Same as delivery address");

  // Edit states
  const [isEditingDelivery, setIsEditingDelivery] = useState(false);
  const [isEditingBilling, setIsEditingBilling] = useState(false);

  // Handle order placement
  const handlePlaceOrder = () => setIsModalOpen(true);
  const handleCancelOrder = () => {
    setIsModalOpen(false);
    clearCart();
  };

  return (
    <div className="container mx-auto py-8 px-4 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Delivery, Payment, Billing */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Delivery Info */}
          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Delivery Information</h3>
              <button onClick={() => setIsEditingDelivery(!isEditingDelivery)}>
                {isEditingDelivery ? (
                  <FaSave className="text-green-500" />
                ) : (
                  <FaEdit className="text-gray-500 hover:text-gray-700" />
                )}
              </button>
            </div>
            {isEditingDelivery ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={deliveryInfo.name}
                  onChange={(e) =>
                    setDeliveryInfo({ ...deliveryInfo, name: e.target.value })
                  }
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  value={deliveryInfo.address}
                  onChange={(e) =>
                    setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                  }
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  value={deliveryInfo.phone}
                  onChange={(e) =>
                    setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
                  }
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                />
              </div>
            ) : (
              <>
                <p>Name: {deliveryInfo.name}</p>
                <p>Address: {deliveryInfo.address}</p>
                <p>Phone: {deliveryInfo.phone}</p>
              </>
            )}
          </div>

          {/* Payment Info */}
          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <select className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white">
              <option>Bank Transfer</option>
              <option>Credit/Debit Card</option>
              <option>PayPal</option>
            </select>
          </div>

          {/* Billing Address */}
          <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Billing Address</h3>
              <button onClick={() => setIsEditingBilling(!isEditingBilling)}>
                {isEditingBilling ? (
                  <FaSave className="text-green-500" />
                ) : (
                  <FaEdit className="text-gray-500 hover:text-gray-700" />
                )}
              </button>
            </div>
            {isEditingBilling ? (
              <input
                type="text"
                value={billingInfo}
                onChange={(e) => setBillingInfo(e.target.value)}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            ) : (
              <p>{billingInfo}</p>
            )}
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b py-2 dark:border-gray-600"
              >
                <span>{item.name}</span>
                <span>${(item.price * 1.05).toFixed(2)} (Incl. VAT)</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-semibold">
            <span>Total:</span>
            <span>
              $
              {cart.reduce((acc, item) => acc + item.price * 1.05, 0).toFixed(2)}
            </span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-center dark:text-white">
              Thank you for your order!
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Your order has been saved and is waiting for payment.
            </p>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Pay within 72 hours to avoid cancellation.
            </p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleCancelOrder}
                className="bg-red-500 text-white px-4 py-2 rounded-md dark:bg-red-600 dark:hover:bg-red-700"
              >
                Cancel Order
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

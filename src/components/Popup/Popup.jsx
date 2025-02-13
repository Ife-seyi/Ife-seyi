// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import Button from '../Shared/Button';

// eslint-disable-next-line react/prop-types
const Popup = ({ handleOrderPopup, show = false, cart }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleOrderNow = () => {
    // eslint-disable-next-line react/prop-types
    if (!cart || cart.length === 0) {
      alert("Please select at least one product before placing an order.");
      navigate("/shop"); // Redirect to the shop page
    } else {
      // Proceed with order processing (e.g., save to backend)
      console.log("Order placed:", cart);
      alert("order successfully placed");
      navigate("/checkout")
    }
  };

  return (
    <div>
      <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm'>
        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
          {/* Header section */}
          <div className='flex items-center justify-between'>
            <h1>Order Now</h1>
            <IoCloseCircleOutline onClick={handleOrderPopup} className='text-2xl cursor-pointer' />
          </div>

          {/* Form section */}
          <div className='mt-4'>
            <input type="text" placeholder='Name' className='form-input' />
            <input type="email" placeholder='Email' className='form-input' />
            <input type="text" placeholder='Address' className='form-input' />
            <div className='flex justify-center'>
              <Button text="Order Now" bgColor={"bg-primary"} textColor={"text-white"} onClick={handleOrderNow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

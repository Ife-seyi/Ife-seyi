import React from "react";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import CartPage from "./components/cartPage/CartPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login"; // Import Login Page

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
    console.log("work in jesus name");
  };

  const handleClose2 = () => {
    setShow(!show);
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden"
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout handle={handleClose} loml={show} handle2={handleClose2} />
            }
          >
            <Route index element={<Hero handleOrderPopup={handleClose} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>

          {/* New Routes for Authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

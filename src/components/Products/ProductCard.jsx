/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../Shared/Button";
import { useCart } from "../../useCart"; // Import useCart to access the cart context

const ProductCard = ({ data }) => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  console.log("useCart:", useCart());

  return (
    <div className="mb-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-3 place-items-center"
      >
        {/* Card Section */}
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover Button */}
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2
                               left-1/2 -translate-x-1/2 h-full w-full text-center
                               group-hover:backdrop-blur-sm justify-center
                               items-center duration-200"
              >
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => {
                    console.log("Adding to cart:", product);
                    addToCart(product);
                  }} // Add to cart when clicked
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-bold">{product.title}</h2>
              <h2>${product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

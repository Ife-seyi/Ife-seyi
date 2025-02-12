// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../components/Shared/Heading";
import { Link } from "react-router-dom";
import { useCart } from "../../useCart";
import { ClipLoader } from "react-spinners";

const Category = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  const fetchData = async () => {
    try {
      const smartphoneResponse = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      const laptopResponse = await axios.get(
        "https://dummyjson.com/products/category/laptops"
      );

      const allProducts = [
        ...smartphoneResponse.data.products,
        ...laptopResponse.data.products,
      ];

      setItems(allProducts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mb-10">
      <Heading title="Our Products" subtitle="Explore our products" />
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <ClipLoader color="#3498db" size={50} />
            </div>
          ) : (
            items.map((item) => (
              <div
                className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/40 text-white rounded-3xl relative flex items-end mb-10 group"
                key={item.id}
              >
                <div className="relative w-full">
                  <img
                    src={item.thumbnail}
                    className="h-[180px] w-[260px] object-contain rounded transition-transform duration-300 group-hover:scale-105"
                    alt={item.title}
                  />

                  {/* Buttons - Visible on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md bg-black/30 rounded-lg p-4">
                    <button
                      className="bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all mb-2"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/singleProduct/${item.id}`}
                      className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Product Title & Price (Always Visible) */}
                <div className="mt-2">
                  <h2 className="font-bold">{item.title}</h2>
                  <h2 className="mb-2">${item.price}</h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

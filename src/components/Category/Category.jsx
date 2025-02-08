// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../components/Shared/Heading";
// import Button from "../../components/Shared/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../useCart";
import { ClipLoader } from "react-spinners";

const Category = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart(); // Get addToCart function from context

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
                className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/40 text-white rounded-3xl relative flex items-end mb-10"
                key={item.id}
              >
                <div>
                  <div className="group">
                    <img
                      src={item.thumbnail}
                      className="h-[180px] w-[260px] object-contain rounded"
                      alt={item.title}
                    />

                    <div className="group-hover:flex hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center">
                      <button
                        className="bg-white text-primary font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h2 className="font-bold">{item.title}</h2>
                  <h2 className="mb-4">${item.price}</h2>
                  <Link
                    to={`/singleProduct/${item.id}`}
                    className="bg-black/70 text-white px-4 py-2 rounded-lg"
                  >
                    View Details
                  </Link>
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

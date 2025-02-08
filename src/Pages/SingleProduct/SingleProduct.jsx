import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../useCart";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
} from "react-icons/fa";

const SingleProduct = () => {
  const { addToCart, cart } = useCart();

  console.log("Cart Items:", cart);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); // For image switching
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rating, setRating] = useState(0); // For rating

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.thumbnail); // Default main image
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  // Function to handle clicking small images
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function for mobile next/prev image navigation
  const handleNextImage = () => {
    if (product.images) {
      const nextIndex = (currentImageIndex + 1) % product.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(product.images[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (product.images) {
      const prevIndex =
        (currentImageIndex - 1 + product.images.length) % product.images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(product.images[prevIndex]);
    }
  };

  // Function to handle rating
  const handleRatingClick = (index) => {
    setRating(index);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Desktop View */}
      <div className="hidden md:flex gap-10 items-center">
        {/* Left - Product Image & Thumbnails */}
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-[350px] h-[350px] object-cover rounded-lg shadow-md"
          />
          {/* Thumbnails */}
          <div className="flex gap-3 mt-3">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${selectedImage === image ? "border-primary" : "border-gray-300"}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold text-primary mt-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
                  onClick={() => handleRatingClick(index + 1)}
                />
              ))}
          </div>

          {/* Buy Button */}
          <div className="mt-6 flex items-center">
            <div className="bg-gray-300 px-6 py-2 rounded-l-md text-lg font-semibold">
              {quantity}
            </div>
            <button
              className="flex-1 bg-primary text-white py-2 rounded-r-md flex items-center justify-center gap-2 text-lg font-semibold hover:bg-primary/90 transition"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: Number(product.price), // Ensure price is a number
                  img: product.thumbnail, // Use thumbnail as product image
                  quantity: 1, // Default quantity to 1
                })
              }
            >
              <FaShoppingCart />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center">
        <div className="relative w-full">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          {/* Next & Previous Buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Product Details */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold text-primary mt-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex justify-center mt-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
                  onClick={() => handleRatingClick(index + 1)}
                />
              ))}
          </div>

          {/* Buy Button */}
          <div className="mt-6 flex">
            <div className="bg-gray-300 px-6 py-2 rounded-l-md text-lg font-semibold">
              {quantity}
            </div>
            <button
              className="flex-1 bg-primary text-white py-2 rounded-r-md flex items-center justify-center gap-2 text-lg font-semibold hover:bg-primary/90 transition"
              onClick={() => {
                console.log("Adding to cart:", product);
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: Number(product.price), // Ensure it's a number
                  img: product.thumbnail, // Use the thumbnail image
                  quantity: 1,
                });
              }}
            >
              <FaShoppingCart />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

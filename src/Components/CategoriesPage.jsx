import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const categories = [
    "Women’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const images = [
    "https://png.pngtree.com/background/20230427/original/pngtree-beauty-cosmetic-products-on-dark-background-picture-image_2496070.jpg",
    "https://lurreli.lk/cdn/shop/files/Big_Sale_1.jpg?v=1710949596&width=5760",
    "https://images01.nicepagecdn.com/page/10/99/website-template-preview-109962.jpg",
    "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2020/03/fab-blog.png?fit=1200%2C630&ssl=1",
    "https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2020/05/Responsive-eCommerce-website.jpg",
    "https://www.shutterstock.com/image-vector/premium-white-headphone-ads-on-260nw-1171241968.jpg",
  ];

  // Carousel State & Auto-slide Logic
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-4">
      {/* Left Side: Categories */}
      <div className="w-full md:w-1/4 bg-gray-100 p-2 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
       <Link to="/products">
       <div className="flex flex-col gap-3">
          {categories.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-between  bg-white px-1 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <p className="text-md font-light">{value}</p>
              <FaArrowRight className="text-gray-600" />
            </div>
          ))}
        </div>
       </Link>
      </div>

      {/* Right Side: Carousel (75% width) */}
      <div className="w-full md:w-3/4 relative">
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute block w-full h-full object-cover transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Dots for Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gray-700 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

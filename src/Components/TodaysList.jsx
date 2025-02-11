import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { useFavorites } from "../Components/FavoritesContext"; 
import { useCart } from "../Components/CartContext";  
import { Link } from "react-router-dom"; 

const TodaysList = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart(); 

  const todaysProducts = [
    {
      id: 1,
      image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.landing-big_2x.jpg",
      name: "iPhone 16",
      price: "$500",
      actual_price: "580",
    },
    {
      id: 2,
      image: "https://as2.ftcdn.net/v2/jpg/05/72/78/53/1000_F_572785391_KQba9huYQH4P8WTxCBk8sbxRDTKF5S4z.jpg",
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      actual_price: "150",
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2017/08/07/14/39/laptop-2604524_640.jpg",
      name: "MacBook",
      price: "$650",
      actual_price: "820",
    },
    {
      id: 4,
      image: "https://t4.ftcdn.net/jpg/09/86/23/47/360_F_986234712_iyUn6PjCRmpuobZwA1swyPHBoKZqpI0N.jpg",
      name: "Speakers",
      price: "$320",
      actual_price: "820",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/31aDWE4msZL.jpg",
      name: "Smart TV",
      price: "$110",
      actual_price: "160",
    },
    {
      id: 6,
      image: "https://img.drz.lazcdn.com/static/bd/p/514f1102008e43d0e4a377416998b764.jpg_720x720q80.jpg",
      name: "Keyboard",
      price: "$65",
      actual_price: "69",
    },
  ];

  const calculateTimeLeft = () => {
    const difference = new Date("2025-12-31T23:59:59") - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-red-600 font-bold text-lg">Today's</h1>
      <div className="flex gap-5 items-center">
        <h1 className="text-3xl font-bold py-3">Flash Sales</h1>
        <span className="text-xl font-semibold flex gap-2">
          <div className="text-center">
            <p className="text-sm">Days</p>
            <span>{timeLeft.days}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p className="text-sm">Hours</p>
            <span>{timeLeft.hours}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p className="text-sm">Min</p>
            <span>{timeLeft.minutes}</span>
          </div>
          <span>:</span>
          <div className="text-center">
            <p className="text-sm">Sec</p>
            <span>{timeLeft.seconds}</span>
          </div>
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
        {todaysProducts.map((product) => {
          const isFavorite = favorites.some((fav) => fav.id === product.id);
          return (
            <div key={product.id} className="p-4 rounded-md shadow-lg w-48">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-32 object-cover object-center mx-auto"
              />
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <FaRegHeart
                  className={`cursor-pointer ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => toggleFavorite(product)}
                />
              </div>
              <p className="text-md font">
                {product.price}{" "}
                <span className="line-through text-lg ml-3 text-gray-300">
                  $ {product.actual_price}
                </span>
              </p>
              <ul className="flex mt-1">
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    <MdOutlineStar className="text-amber-300" />
                  </li>
                ))}
              </ul>
              {/* Add to Cart Button */}
              <button
                className="bg-blue-600 text-white py-1 px-4 mt-2 rounded-lg w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center my-3">
        <Link to="/products">
          <button className="bg-red-700 text-white text-center rounded-lg py-2 px-8">
            View all products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TodaysList;

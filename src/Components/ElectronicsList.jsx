import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const ElectronicProducts = [
  { image: "https://static.vecteezy.com/system/resources/previews/010/451/460/non_2x/tv-monitor-icon-isolated-on-white-background-free-vector.jpg", name: "Smart TV" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HM1CdhYhhGUQcUGjqUS9ExNFMWcZw76ft_tLvG1AD-1vF9ViJaC4ucQdnumYFdsYRnE&usqp=CAU", name: "Smart Watch" },
  { image: "https://static.vecteezy.com/system/resources/thumbnails/006/624/453/small_2x/smartphone-icon-design-phone-symbol-free-vector.jpg", name: "Phone's" },
  { image: "https://static.vecteezy.com/system/resources/previews/005/029/311/non_2x/desktop-computer-monitor-line-icon-outline-sign-linear-style-pictogram-isolated-on-white-symbol-logo-illustration-editable-stroke-pixel-perfect-free-vector.jpg", name: "Computers" },
  { image: "https://static.vecteezy.com/system/resources/previews/005/863/155/non_2x/headphones-icon-music-symbol-isolated-on-white-background-free-vector.jpg", name: "Headphones" },
  { image: "https://static.vecteezy.com/system/resources/thumbnails/007/126/481/small/gaming-controller-icon-vector.jpg", name: "Gaming +" },
];

const ElectronicsList = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && navigationPrevRef.current && navigationNextRef.current) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="container mx-auto px-4 py-3 relative">
      <p className="text-red-600 font-bold text-lg">Categories</p>
      <h1 className="text-3xl font-bold py-3 mb-3">Browse By Category</h1>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute top-0 right-12 transform -translate-y-1/1 bg-gray-400  p-1 rounded-full shadow-md z-10 
          hover:bg-black transition-all duration-300 group"
        >
          <ArrowBigLeft className="w-8 h-8 text-black group-hover:text-white" />
        </button>

        <button
          ref={navigationNextRef}
          className="absolute top-0 right-0 transform -translate-y-1/1 bg-gray-400 p-1 rounded-full shadow-md z-10 
          hover:bg-black transition-all duration-300 group"
        >
          <ArrowBigRight className="w-8 h-8 text-black group-hover:text-white" />
        </button>

        <br />

        {/* Single Swiper for Images & Names Together */}
        <Link to="/products">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={4}
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=" py-5"
        >
          {ElectronicProducts.map((product, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="rounded-2xl shadow-md p-2 border-2">
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
              </div>
            
            </SwiperSlide>
          ))}
        </Swiper>
        </Link>
      </div>
    </div>
  );
};

export default ElectronicsList;

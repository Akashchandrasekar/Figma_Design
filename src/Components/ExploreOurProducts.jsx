import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { useFavorites } from "../Components/FavoritesContext";
import { Link } from 'react-router-dom';
import { useCart } from "../Components/CartContext";

const ExploreOurProducts = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const { addToCart } = useCart();


    const exploreProducts = [
        {
            id: 1,
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4L29KblRMQzVUOE4vMXpkMWtFcm9GcXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGRaWWVaY3B6VTFTdVNEWDF2OTRBYlY&traceId=1",
            name: "iPhone 16",
            price: "$500",
            actual_price: "580"
        },
        {
            id: 2,
            image: "https://rukminim2.flixcart.com/image/850/1000/kxaq7ww0/joystick/n/4/d/x3-bluetooth-game-controller-joystick-mobile-game-controller-original-imag9s9rrwgh7fa9.jpeg?q=90&crop=false",
            name: "HAVIT HV-G92 Gamepad",
            price: "$120",
            actual_price: "150"
        },
        {
            id: 3,
            image: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/m/b/mba13-silver-select-202402_2.jpeg",
            name: "MacBook",
            price: "$650",
            actual_price: "820"
        },
        {
            id: 4,
            image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
            name: "Grocery",
            price: "$120",
            actual_price: "150"
        },
        {
            id: 5,
            image: "https://www.artis.in/cdn/shop/files/5_266f573f-421a-4614-a1c3-6272ddafe1d7.jpg?v=1715232255",
            name: "Speakers",
            price: "$220",
            actual_price: "240"
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ-4LcyWKrv_Bum-v5ub53critgNPo5XWTQ&s",
            name: "Smart TV",
            price: "$260",
            actual_price: "275",
        },
        {
            id: 7,
            image: "https://img.drz.lazcdn.com/static/bd/p/514f1102008e43d0e4a377416998b764.jpg_720x720q80.jpg",
            name: "Keyboard",
            price: "$65",
            actual_price: "69"
        },
        {
            id: 8,
            image: "https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg",
            name: "Shirt",
            price: "$45",
            actual_price: "50",
        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYJE-PH3eidrBXof4IpM8lVEi7q0vnK7ESw&s",
            name: "Chudy",
            price: "$45",
            actual_price: "51",
        },
        {
            id: 10,
            image: "https://www.extermpro.com/wp-content/uploads/2022/08/english-cocker-spaniel-ga3fef6dc8_1920-540x540.jpg",
            name: "pedigree",
            price: "$25",
            actual_price:"30",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-6">
        <p className="text-red-600 font-bold text-lg">Our Products</p>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold py-3 mb-3">Explore Our Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {exploreProducts.map((product) => (
                <div
                    key={product.id}
                    className="p-3 rounded-md shadow-lg w-48 bg-white transition-all hover:shadow-xl"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-36 w-36 object-contain mx-auto"
                    />
                    <div className="flex justify-between items-center mt-2">
                        <h3 className="text-sm font-semibold">{product.name}</h3>
                        <FaRegHeart
                            className={`cursor-pointer ${
                                favorites.some((fav) => fav.id === product.id)
                                    ? "text-red-500"
                                    : "text-gray-400"
                            }`}
                            onClick={() => toggleFavorite(product)}
                        />
                    </div>
                    <p className="text-md font-semibold">
                        {product.price}{" "}
                        <span className="line-through text-sm ml-2 text-gray-400">
                            $ {product.actual_price}
                        </span>
                    </p>

                    {/* ⭐⭐⭐½ Rating stars */}
                    <div className="flex items-center mt-1 space-x-1">
                        {[...Array(3)].map((_, i) => (
                            <MdOutlineStar key={i} className="text-amber-400" />
                        ))}
                        <MdStarHalf className="text-amber-400" />
                        <span className="text-xs text-gray-500">(65)</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(product)} 
                        className="mt-3 w-full bg-blue-600 text-white py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>

        <Link to="/products">
            <div className="flex items-center justify-center my-6">
                <button className="bg-red-700 text-white text-center py-2 px-8 rounded-lg hover:bg-red-800 transition">
                    View all products
                </button>
            </div>
        </Link>
    </div>
);
};

export default ExploreOurProducts;

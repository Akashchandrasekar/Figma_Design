import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { useFavorites } from "../Components/FavoritesContext";
import { Link } from 'react-router-dom';
import { useCart } from "../Components/CartContext"; 

const ThismonthProducts = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const { addToCart } = useCart(); 

    const thisMonthProducts = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gG6coHQtjE2lv0423tkSQnGNVhTrBqvIyQ&s",
            name: "Samsung Galaxy S23",
            price: "$600",
            actual_price: "750"
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfdRB7O1MVpgZGf_tmWfGp76GPkybdx24Jg&s",
            name: "Logitech G29 Racing Wheel",
            price: "$250",
            actual_price: "300"
        },
        {
            id: 3,
            image: "https://images.jdmagicbox.com/quickquotes/images_main/dell-xps-15-laptop-2219582090-vjuxb6yl.png",
            name: "Dell XPS 15",
            price: "$800",
            actual_price: "1000"
        },
        {
            id: 4,
            image: "https://www.robot-advance.com/userfiles/www.robot-advance.com/images/jbl-boombox.jpg",
            name: "JBL Bluetooth Speakers",
            price: "$200",
            actual_price: "350"
        },
        {
            id: 5,
            image: "https://images.philips.com/is/image/philipsconsumer/db0b3c899f524c03ac39afba009e55d0?$pnglarge$&wid=1250",
            name: "Philips 43-Inch 4K Smart TV",
            price: "$300",
            actual_price: "450"
        },
        {
            id: 9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYJE-PH3eidrBXof4IpM8lVEi7q0vnK7ESw&s",
            name: "Chudy",
            price: "$45",
            actual_price: "51",
        },
        {
            id: 4,
            image: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
            name: "Grocery",
            price: "$120",
            actual_price: "150"
        },
        {
            id: 8,
            image: "https://cdn.pixabay.com/photo/2017/08/07/14/39/laptop-2604524_640.jpg",
            name: "MacBook",
            price: "$650",
            actual_price: "820"
        },
        {
            id: 9,
            image: "https://t4.ftcdn.net/jpg/09/86/23/47/360_F_986234712_iyUn6PjCRmpuobZwA1swyPHBoKZqpI0N.jpg",
            name: "Speakers",
            price: "$320",
            actual_price: "820"
        },
        {
            id: 10,
            image: "https://m.media-amazon.com/images/I/31aDWE4msZL.jpg",
            name: "Smart TV",
            price: "$110",
            actual_price: "160"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-6">
            <div>
                <p className="text-red-600 font-bold text-lg">This Month</p>
                <div className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold py-3 mb-3">Best Selling Products</h1>
                    <Link to="/products">
                        <button className="bg-red-700 text-white text-center rounded-lg py-1 px-4">View All</button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4">
                    {thisMonthProducts.map((product) => (
                        <div key={product.id} className="p-3 rounded-md shadow-lg w-44">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-32 w-32 object-cover object-center mx-auto"
                            />
                            <div className="flex justify-between items-center mt-2">
                                <h3 className="text-sm font-semibold">{product.name}</h3>
                                <FaRegHeart
                                    className={`cursor-pointer ${favorites.some(fav => fav.id === product.id) ? "text-red-500" : "text-gray-400"}`}
                                    onClick={() => toggleFavorite(product)}
                                />
                            </div>
                            <p className="text-md font">
                                {product.price}{" "}
                                <span className="line-through text-lg ml-3 text-gray-300">$ {product.actual_price}</span>
                            </p>

                            {/* ⭐⭐⭐½ Rating stars */}
                            <div className="flex items-center mt-1 space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <MdOutlineStar key={i} className="text-amber-300" />
                                ))}
                                <MdStarHalf className="text-amber-300" />
                                <span className="text-sm text-gray-600">(65)</span>
                            </div>
                            <button
                                onClick={() => addToCart(product)} // ✅ Corrected to use addToCart
                                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThismonthProducts;

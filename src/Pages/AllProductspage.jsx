import React from "react";
import { useFavorites } from "../Components/FavoritesContext"; 
import { useCart } from "../Components/CartContext"; 
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const AllProductspage = ({ addToCart }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const { addToCart: addProductToCart } = useCart();

    const Products = [
        {
          id: 101,
          image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.landing-big_2x.jpg",
          name: "iPhone 16",
          price: 500,
          actual_price: 580,
        },
        {
          id: 102,
          image: "https://as2.ftcdn.net/v2/jpg/05/72/78/53/1000_F_572785391_KQba9huYQH4P8WTxCBk8sbxRDTKF5S4z.jpg",
          name: "HAVIT HV-G92 Gamepad",
          price: 120,
          actual_price: 150,
        },
        {
          id: 103,
          image: "https://cdn.pixabay.com/photo/2017/08/07/14/39/laptop-2604524_640.jpg",
          name: "MacBook",
          price: 650,
          actual_price: 820,
        },
        {
          id: 104,
          image: "https://t4.ftcdn.net/jpg/09/86/23/47/360_F_986234712_iyUn6PjCRmpuobZwA1swyPHBoKZqpI0N.jpg",
          name: "Speakers",
          price: 320,
          actual_price: 400,
        },
        {
          id: 105,
          image: "https://m.media-amazon.com/images/I/31aDWE4msZL.jpg",
          name: "Smart TV",
          price: 110,
          actual_price: 160,
        },
        {
          id: 106,
          image: "https://img.drz.lazcdn.com/static/bd/p/514f1102008e43d0e4a377416998b764.jpg_720x720q80.jpg",
          name: "Keyboard",
          price: 65,
          actual_price: 69,
        },
        {
          id: 107,
          image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Gaming PC",
          price: 350,
          actual_price: 400,
        },
        {
          id: 108,
          image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Men's Suit",
          price: 120,
          actual_price: 150,
        },
        {
          id: 109,
          image: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D",
          name: "Home & Lifestyle",
          price: 650,
          actual_price: 820,
        },
        {
          id: 110,
          image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLT?ver=e0df&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
          name: "Laptop",
          price: 350,
          actual_price: 365,
        },
        {
          id: 111,
          image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Gaming Keyboard",
          price: 65,
          actual_price: 89,
        },
        {
          id: 112,
          image: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Gaming CPU",
          price: 420,
          actual_price: 450,
        },
        {
          id: 113,
          image: "https://jadeblue.com/cdn/shop/articles/mens-formal-wear-checklist-for-2024.jpg?v=1722339867&width=1100",
          name: "Shirts & Pants",
          price: 65,
          actual_price: 69,
        },
        {
          id: 114,
          image: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
          name: "Shoes",
          price: 55,
          actual_price: 62,
        },
        {
          id: 115,
          image: "https://t4.ftcdn.net/jpg/04/10/15/77/360_F_410157798_tj8hwJxbPoHv6qWEIoJKDBF30mHMp9EY.jpg",
          name: "Medicine",
          price: 65,
          actual_price: 69,
        },
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
          id: 116,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTBYFddtaZ7caHXV5CAuhfw8hb996S0BhAA&s",
          name: "Sports Equipment",
          price: 150,
          actual_price: 163,
        },
        {
          id: 117,
          image: "https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg",
          name: "Women's Dress",
          price: 65,
          actual_price: 69,
        },
      ];
      


      return (
        <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
            {Products.map((product) => {
                const isFavorite = favorites.some((fav) => fav.id === product.id);

                return (
                    <div key={product.id} className="p-4 rounded-md shadow-lg bg-white w-full">
                        <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
                        <div className="flex justify-between items-center mt-3">
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <FaRegHeart
                                className={`cursor-pointer text-xl ${isFavorite ? "text-red-500" : "text-gray-400"}`}
                                onClick={() => toggleFavorite(product)}
                            />
                        </div>
                        <p className="text-md font-bold text-gray-800">
                            Price: ${product.price} 
                            <span className="line-through text-sm text-gray-400 ml-2">${product.actual_price}</span>
                        </p>
                        <ul className="flex mt-1">
                            {[...Array(4)].map((_, i) => (
                                <li key={i}>
                                    <MdOutlineStar className="text-amber-300" />
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => addProductToCart(product)} // ✅ Updated function name
                            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    </div>
    );
};

export default AllProductspage;
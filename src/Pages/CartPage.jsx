import React from "react";
import { useCart } from "../Components/CartContext";

const CartPage = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalQuantity, totalPrice, clearCart } = useCart();

    const handleOrderNow = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add some products first.");
            return;
        }
        alert("Order placed successfully!");
        clearCart(); 
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="flex-1 ml-4">
                                <h3 className="text-md font-semibold">{item.name}</h3>
                                <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2">
                                    <button className="px-2 py-1 bg-gray-300 rounded-md" onClick={() => decreaseQuantity(item.id)}>
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button className="px-2 py-1 bg-gray-300 rounded-md" onClick={() => increaseQuantity(item.id)}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Total Quantity: {totalQuantity}</h2>
                        <h2 className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
                    </div>
                    <button onClick={handleOrderNow} className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                        Order Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;

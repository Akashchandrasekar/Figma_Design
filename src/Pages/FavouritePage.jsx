import React from "react";
import { useFavorites } from "../Components/FavoritesContext";

const FavouritePage = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold">Your Favorite Products</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500 mt-4">No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {favorites.map((product, index) => (
            <div key={index} className="p-4 rounded-md shadow-lg w-48">
              <img src={product.image} alt={product.name} className="h-32 w-32 object-cover object-center mx-auto" />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-md">{product.price}</p>
              <button onClick={() => toggleFavorite(product)} className="text-red-500 mt-2">
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;

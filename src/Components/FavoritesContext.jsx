import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Create a Context
const FavoritesContext = createContext();

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    }
    return [];
  });

  // Load favorites from localStorage when the app starts (Only runs on mount)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  // Function to add/remove from favorites (Optimized with useCallback)
  const toggleFavorite = useCallback((product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === product.id);
      return isAlreadyFavorite
        ? prevFavorites.filter((fav) => fav.id !== product.id) // Remove
        : [...prevFavorites, product]; // Add
    });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook to use the favorites
export const useFavorites = () => useContext(FavoritesContext);

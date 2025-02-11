import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import { FavoritesProvider } from "./Components/FavoritesContext"; 
import { CartProvider } from "./Components/CartContext";  // ✅ Import CartProvider
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn"; 
import Footer from "./Components/Footer";
import TodaysList from "./Components/TodaysList";
import FavouritePage from "./Pages/FavouritePage";
import AllProductspage from "./Pages/AllProductspage";
import CartPage from "./Pages/CartPage"; // ✅ Import Cart Page

const App = () => {
  return (
    <AuthProvider>
      <CartProvider> {/* ✅ Wrap the app inside CartProvider */}
        <FavoritesProvider> 
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<AllProductspage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/todayslist" element={<TodaysList />} />
              <Route path="/wishlist" element={<FavouritePage />} />
              <Route path="/cart" element={<CartPage />} /> {/* ✅ Add Cart Page Route */}
            </Routes>
            <Footer />
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

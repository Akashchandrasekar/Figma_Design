import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../Components/CartContext";

const products = [
  { id: 101, name: "iPhone 16" },
  { id: 102, name: "HAVIT HV-G92 Gamepad" },
  { id: 103, name: "MacBook" },
  { id: 104, name: "Speakers" },
  { id: 105, name: "Smart TV" },
  { id: 106, name: "Keyboard" },
  { id: 107, name: "Gaming PC" },
  { id: 108, name: "Men's Suit" },
  { id: 109, name: "Home & Lifestyle" },
  { id: 110, name: "Laptop" },
  { id: 111, name: "Gaming Keyboard" },
  { id: 112, name: "Gaming CPU" },
  { id: 113, name: "Shirts & Pants" },
  { id: 114, name: "Shoes" },
  { id: 115, name: "Medicine" },
  { id: 116, name: "Sports Equipment" },
  { id: 117, name: "Women's Dress" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm]);

  // Handle clicking outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilteredProducts([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl text-black font-bold">
          <NavLink to="/" className="hover:underline">Exclusive</NavLink>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-black font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/about" },
            { name: "SignUp", path: "/signup" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:underline transition ${
                    isActive ? "text-black underline shadow-md" : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search & Icons Section */}
        <div className="relative hidden md:flex items-center space-x-6" ref={dropdownRef}>
          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-400 rounded-lg px-3 py-1 outline-none text-black bg-transparent"
            />
            <CiSearch className="absolute right-3 top-2 text-gray-500 cursor-pointer" />
            
            {/* Dropdown */}
            {filteredProducts.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-48 overflow-y-auto z-50">
                {filteredProducts.map((product) => (
                  <li
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate(`/products/${product.id}`);
                      setSearchTerm(""); 
                      setFilteredProducts([]);
                    }}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Icons */}
          <ul className="flex gap-4 text-xl">
            <li>
              <NavLink to="/wishlist">
                <FaRegHeart className="hover:text-red-500 transition" />
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/cart">
                <MdOutlineShoppingCart className="hover:text-blue-500 transition" />
                {cartQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartQuantity}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center bg-white p-4 rounded-lg shadow-lg">
          {[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/about" },
            { name: "SignUp", path: "/signup" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 text-lg hover:underline ${
                    isActive ? "text-black underline" : "text-gray-900"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

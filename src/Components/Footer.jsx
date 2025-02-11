import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiFacebookLine } from "react-icons/ri";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-6">
        
        {/* Logo & Subscription Section */}
        <div>
          <h3 className="text-xl font-semibold">Exclusive</h3>
          <h4 className="mt-2 font-semibold">Subscribe</h4>
          <p>Get 10% off your first order</p>
          
          {/* Email Subscription Box */}
          <div className="flex items-center border rounded-lg overflow-hidden mt-2 bg-gray-800">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 flex-1 text-white outline-none border-none bg-transparent placeholder-gray-300"
            />
            <button 
              className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-gray-700 transition-all">
              <IoSendSharp className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Support</h4>
          <p className="space-y-2">
            16B Mela Muslim Street, <br />
            Thiruvidaimarudhur, Kumbakonam, Thanjavur.
          </p>
          <p className="mt-2">akashsamprince@gmail.com</p>
          <p>+6374521927</p>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Account</h4>
          <ul className="space-y-2">
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Download App</h4>
          <p>Save $3 with the App (New User Only)</p>
          <img
            src="https://play-lh.googleusercontent.com/ufwUy4SGVTqCs8fcp6Ajxfpae0bNImN1Rq2cXUjWI7jlmNMCsXgQE5C3yUEzBu5Gadkz"
            alt="Download QR Code"
            className="mt-2 w-20 h-20"
          />
          
          {/* Social Media Links */}
          <div className="flex gap-4 items-center mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <RiFacebookLine className="text-white text-2xl hover:text-gray-400 transition-all" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white text-2xl hover:text-gray-400 transition-all" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-all" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-white text-2xl hover:text-gray-400 transition-all" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

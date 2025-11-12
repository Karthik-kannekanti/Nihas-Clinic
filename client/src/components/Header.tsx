import React from "react";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full px-12 py-5">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/figmaAssets/149.svg"
            alt="Babet Logo"
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="font-medium text-gray-900 hover:text-orange-500 transition-colors flex items-center gap-1" style={{ fontFamily: "'Onest', sans-serif" }}>
            Home
            <svg width="11" height="26" viewBox="0 0 11 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <text y="20" fontSize="14.4" fontFamily="Font Awesome 5 Pro"></text>
            </svg>
          </a>
          <a href="#about" className="font-medium text-gray-900 hover:text-orange-500 transition-colors" style={{ fontFamily: "'Onest', sans-serif" }}>
            About Us
          </a>
          <a href="#services" className="font-medium text-gray-900 hover:text-orange-500 transition-colors flex items-center gap-1" style={{ fontFamily: "'Onest', sans-serif" }}>
            Services
            <svg width="11" height="26" viewBox="0 0 11 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <text y="20" fontSize="14.4" fontFamily="Font Awesome 5 Pro"></text>
            </svg>
          </a>
          <a href="#pages" className="font-medium text-gray-900 hover:text-orange-500 transition-colors flex items-center gap-1" style={{ fontFamily: "'Onest', sans-serif" }}>
            Pages
            <svg width="11" height="26" viewBox="0 0 11 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <text y="20" fontSize="14.4" fontFamily="Font Awesome 5 Pro"></text>
            </svg>
          </a>
          <a href="#blog" className="font-medium text-gray-900 hover:text-orange-500 transition-colors flex items-center gap-1" style={{ fontFamily: "'Onest', sans-serif" }}>
            Blog
            <svg width="11" height="26" viewBox="0 0 11 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <text y="20" fontSize="14.4" fontFamily="Font Awesome 5 Pro"></text>
            </svg>
          </a>
          <a href="#contact" className="font-medium text-gray-900 hover:text-orange-500 transition-colors" style={{ fontFamily: "'Onest', sans-serif" }}>
            Contact Us
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="text-gray-900" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            <span className="font-medium">Call us: </span>
            <span className="font-medium">+00-(120) 3456 789</span>
          </div>
          
          <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Search className="w-5 h-5 text-orange-500" />
          </button>

          <button 
            className="px-8 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

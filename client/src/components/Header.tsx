import React from "react";
import { Search, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full px-6 lg:px-12 py-5 shadow-sm">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="/figmaAssets/149.svg"
            alt="Babet Logo"
            className="h-10 lg:h-14 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            Home
          </a>
          <a href="#about" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            About Us
          </a>
          <a href="#services" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            Services
          </a>
          <a href="#pages" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            Pages
          </a>
          <a href="#blog" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            Blog
          </a>
          <a href="#contact" className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#f8721f] transition-colors">
            Contact Us
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="[font-family:'Fredoka',sans-serif] font-medium text-[#02000f] text-base">
            Call us: <span className="text-[#f8721f]">+00-(120) 3456 789</span>
          </div>
          
          <button className="w-14 h-14 rounded-full bg-[#f6f2ed] flex items-center justify-center hover:bg-[#f8721f] hover:text-white transition-colors group">
            <Search className="w-5 h-5 text-[#f8721f] group-hover:text-white" />
          </button>

          <button className="px-8 h-14 bg-[#f8721f] hover:bg-[#e66310] text-white rounded-[50px] [font-family:'Onest',sans-serif] font-normal text-base transition-colors">
            Book Now
          </button>
        </div>

        <button className="lg:hidden p-2">
          <Menu className="w-6 h-6 text-[#02000f]" />
        </button>
      </div>
    </header>
  );
};

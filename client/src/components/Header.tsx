import React from "react";
import { Search, Menu } from "lucide-react";
import { Link } from "wouter";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full px-6 lg:px-12 py-5 shadow-sm">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src="/figmaAssets/nihas-pet-care-logo.jpg"
            alt="Niha's Pet Care Clinic Logo"
            className="h-12 lg:h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#167f74] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="[font-family:'Onest',sans-serif] font-medium text-[#02000f] text-base hover:text-[#167f74] transition-colors"
          >
            Service
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="[font-family:'Fredoka',sans-serif] font-medium text-[#02000f] text-base">
            Call us: <span className="text-[#167f74]">+91 94921 88745</span>
          </div>
          
          <button className="w-14 h-14 rounded-full bg-[#f6f2ed] flex items-center justify-center hover:bg-[#167f74] hover:text-white transition-colors group">
            <Search className="w-5 h-5 text-[#167f74] group-hover:text-white" />
          </button>

          <button className="px-8 h-14 bg-[#167f74] hover:bg-[#0f5d52] text-white rounded-[50px] [font-family:'Onest',sans-serif] font-normal text-base transition-colors">
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

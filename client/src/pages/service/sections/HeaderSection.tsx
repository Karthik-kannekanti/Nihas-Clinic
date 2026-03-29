import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/service" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full bg-transparent py-12 px-12">
      <div className="flex items-start justify-between gap-8">
        <div className="flex flex-col gap-8">
          <img
            className="w-auto h-12"
            alt="Niha's Pet Care Clinic Logo"
            src="/figmaAssets/nihas-pet-care-logo.jpg"
          />

          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12"
              alt="Background"
              src="/figmaAssets/background-1.svg"
            />
            <div className="flex flex-col">
              <div className="[font-family:'Fredoka',Helvetica] font-medium text-white text-2xl leading-[34.0px] whitespace-nowrap">
                Call us:
              </div>
              <div className="[font-family:'Onest',Helvetica] font-normal text-white text-lg leading-[31.5px] whitespace-nowrap">
                +91 94921 88745
              </div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-[46.3px] pt-[31.5px]">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="[font-family:'Onest',Helvetica] font-normal text-white text-base leading-[26px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          className="h-12 px-8 rounded-[50px] border-white text-white bg-transparent hover:bg-white/10 [font-family:'Onest',Helvetica] font-normal text-base mt-[18px]"
        >
          Request a quote
        </Button>
      </div>
    </header>
  );
};

import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationItems = [
  { label: "Home", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
  { label: "Services", hasDropdown: true },
  { label: "Pages", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Contact Us", hasDropdown: false },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <ContactSection />
      <FeaturesSection />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <MainContentSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

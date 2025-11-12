import React from "react";
import { Header } from "@/components/Header";
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

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <Header />
      <ContactSection />
      <FeaturesSection />
      <HeroSection />
      <ServicesSection />
      <MainContentSection />
      <GallerySection />
      <PricingSection />
      <NewsletterSection />
      <TestimonialsSection />
      <BlogSection />
      <AboutUsSection />
      <FooterSection />
    </div>
  );
};

import React from "react";
import { BackgroundSection } from "./sections/BackgroundSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TabContentSection } from "./sections/TabContentSection";

export const Service = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] relative">
      <ServicesSection />
      <NavigationTabsSection />
      <TabContentSection />
      <MainContentSection />
      <BackgroundSection />
      <FooterSection />
    </div>
  );
};

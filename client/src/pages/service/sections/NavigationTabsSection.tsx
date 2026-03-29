import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const tabsData = [
  {
    id: "cat",
    label: "Cat Grooming",
    icon: "/figmaAssets/icon-3.svg",
  },
  {
    id: "dog",
    label: "Dog Grooming",
    icon: "/figmaAssets/icon-1.svg",
  },
  {
    id: "fish",
    label: "Fish Grooming",
    icon: "/figmaAssets/icon-4.svg",
  },
  {
    id: "birds",
    label: "Birds Grooming",
    icon: "/figmaAssets/icon-2.svg",
  },
  {
    id: "turtles",
    label: "Turtles Grooming",
    icon: "/figmaAssets/icon.svg",
  },
  {
    id: "rabbit",
    label: "Rabbit Grooming",
    icon: "/figmaAssets/icon-1.svg",
  },
];

export const NavigationTabsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("cat");

  return (
    <nav className="w-full flex gap-[15px]">
      {tabsData.map((tab) => (
        <Card
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 min-w-0 h-[106.89px] rounded-2xl overflow-hidden shadow-[0px_8px_24px_#959da533] cursor-pointer transition-colors ${
            activeTab === tab.id ? "bg-[#167f74]" : "bg-[#ffffff01]"
          }`}
        >
          <CardContent className="relative w-full h-full p-0 flex flex-col items-center justify-center">
            <img className="w-12 h-12 mb-2" alt={tab.label} src={tab.icon} />
            <div
              className={`[font-family:'Fredoka',Helvetica] font-medium text-base text-center tracking-[0] leading-4 whitespace-nowrap px-2 ${
                activeTab === tab.id ? "text-white" : "text-[#02000f]"
              }`}
            >
              {tab.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </nav>
  );
};

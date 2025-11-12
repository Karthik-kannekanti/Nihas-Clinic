import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuresData = [
  {
    icon: "/figmaAssets/background-9.svg",
    title: "Play & Socialization",
    description: "Nullam porta enim vel tellus eget\nlaoreet odio ultrices.",
  },
  {
    icon: "/figmaAssets/background-7.svg",
    title: "Feeding & Special Care",
    description: "Nullam porta enim vel tellus eget\nlaoreet odio ultrices.",
  },
  {
    icon: "/figmaAssets/background-6.svg",
    title: "Behavior support",
    description: "Nullam porta enim vel tellus eget\nlaoreet odio ultrices.",
  },
  {
    icon: "/figmaAssets/background-8.svg",
    title: "Pet Communication",
    description: "Nullam porta enim vel tellus eget\nlaoreet odio ultrices.",
  },
];

const bulletPoints = [
  "Strategy development & growth",
  "Market research & competitors",
  "Risk management",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[120px]">
      <div className="absolute top-[108px] right-[186px] w-[100px] h-[100px] bg-[url(/figmaAssets/shape1-30-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[368px] right-[84px] w-[55px] h-[55px] bg-[url(/figmaAssets/shape1-31-png.png)] bg-cover bg-[50%_50%]" />

      <div className="flex flex-col items-center gap-6 px-3">
        <Badge
          variant="outline"
          className="h-auto rounded-[100px] border-2 border-[#f8721f] bg-transparent px-[21px] py-[9px]"
        >
          <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#f8721f] text-base text-center tracking-[0] leading-6">
            Our Features
          </span>
        </Badge>

        <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] text-center tracking-[0] leading-[68px] whitespace-nowrap">
          Get The Massive Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1428px] mt-[43px]">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col bg-[#f6f2ed] rounded-[30px] border-0 overflow-hidden"
            >
              <CardContent className="flex flex-col p-0">
                <img
                  className="ml-[30px] w-[100px] h-[100px] mt-[30px]"
                  alt={feature.title}
                  src={feature.icon}
                />

                <h3 className="ml-[30px] mt-[29.3px] [font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-2xl tracking-[0] leading-[34px]">
                  {feature.title}
                </h3>

                <p className="ml-[30px] mt-3.5 [font-family:'Onest',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-7 whitespace-pre-line">
                  {feature.description}
                </p>

                <div className="mx-px mt-[27px] mb-[30px] flex flex-col gap-[25px] bg-white rounded-[30px] p-[30px_25px_25px_25px]">
                  <div className="flex flex-col gap-0">
                    {bulletPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-[4.2px] h-7"
                      >
                        <CheckIcon className="w-[14.76px] h-[15px] text-[#4e4e4e] flex-shrink-0" />
                        <span className="[font-family:'Onest',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-7">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="h-[46px] bg-[#f8721f] hover:bg-[#e66310] rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const carouselSlides = [
  {
    image: "/figmaAssets/mask-group.svg",
    title: "Our Mission",
    description:
      "we believe pets are more than just animals — they're family. Founded with a deep love for animals and a passion for providing top-tier care, Babet is your pet's home away from home. Whether youre a busy pet parent in need of reliable daycare.",
    features: [
      {
        title: "Safe & Supervised Environment –",
        description:
          "Your pet's safety is our top priority. All play and care areas are professionally supervised and sanitized daily.",
      },
      {
        title: "Personalized Attention –",
        description:
          "We treat every pet as an individual, tailoring care, feeding, and activities to their specific needs and temperament.",
      },
    ],
    progressCards: [
      {
        percentage: 85,
      },
      {
        percentage: 95,
      },
    ],
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto py-[150px] [background:url(../figmaAssets/background-3.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(246,242,237,1)_0%,rgba(246,242,237,1)_100%)]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/image-1.png"
      />

      <div className="relative w-full h-full">
        <div className="absolute top-[11px] right-[calc(50%-403px)] w-[116px] h-24 bg-[url(/figmaAssets/shape1-32-png.png)] bg-cover bg-[50%_50%]" />

        <div className="absolute top-[-43px] right-[calc(50%-720px)] w-[433px] h-[213px] bg-[url(/figmaAssets/shape1-33-e1759226597392-png.png)] bg-cover bg-[50%_50%]" />

        <div className="container mx-auto px-3">
          <Badge
            variant="outline"
            className="inline-flex items-center justify-center h-[38px] px-[21px] rounded-[100px] border-2 border-[#f8721f] bg-transparent"
          >
            <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#f8721f] text-base tracking-[0] leading-6">
              About Our Company
            </span>
          </Badge>

          <h1 className="mt-[14px] max-w-[652px] [font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] tracking-[0] leading-[68.0px]">
            Providing Loving Care for
            <br />
            Your Pets, Always.
          </h1>

          <div className="mt-[42px] w-full overflow-hidden">
            <div className="relative w-full h-[456px]">
              {carouselSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex gap-[91px] w-full h-full">
                  <img
                    className="w-[647px] h-[456px] object-cover flex-shrink-0"
                    alt="Pet care"
                    src={slide.image}
                  />

                  <div className="flex-1 flex flex-col">
                    <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[28px] tracking-[0] leading-[39.7px]">
                      {slide.title}
                    </h2>

                    <p className="mt-[11px] [font-family:'Onest',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[26px]">
                      {slide.description}
                    </p>

                    <div className="mt-[30px] flex flex-col gap-[69px]">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-[15px]">
                          <div className="w-[35px] h-[35px] flex-shrink-0">
                            <img
                              className="w-full h-full"
                              alt="CheckIcon icon"
                              src="/figmaAssets/background-4.svg"
                            />
                          </div>
                          <p className="[font-family:'Onest',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[26px]">
                            <span className="font-semibold">
                              {feature.title}
                            </span>{" "}
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-[25px] flex gap-[81px]">
                      {slide.progressCards.map((card, cardIndex) => (
                        <Card
                          key={cardIndex}
                          className="w-[307px] bg-white rounded-[20px] border-0 shadow-none"
                        >
                          <CardContent className="p-0">
                            <div className="pt-[16.6px] pb-[16.3px] px-[25px]">
                              <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#02000f] text-xl tracking-[0] leading-[28.3px]">
                                Pet Care Progress
                              </h3>
                            </div>

                            <div className="mx-2.5 mb-[16.3px] flex items-center justify-between gap-[43px] bg-[#f9e9e0] rounded-[20px] px-[25px] py-[8.1px] h-[74.26px]">
                              <div className="flex items-center gap-[4.6px]">
                                <span className="[font-family:'Fredoka',Helvetica] font-semibold text-[#f8721f] text-5xl tracking-[0] leading-[58.3px]">
                                  {card.percentage}
                                </span>
                                <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#f8721f] text-lg leading-[21.9px] tracking-[0]">
                                  %
                                </span>
                              </div>

                              <Button className="h-9 px-[18.38px] bg-[#f8721f] hover:bg-[#e66310] rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
                                View Graph
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[149px] flex gap-[22px]">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-[99px] border-0 shadow-none"
            >
              <ChevronLeftIcon className="w-4 h-4 text-[#f8721f]" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 bg-white hover:bg-gray-50 rounded-[99px] border-0 shadow-none"
            >
              <ChevronRightIcon className="w-4 h-4 text-[#f8721f]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

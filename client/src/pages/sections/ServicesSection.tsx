import React from "react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: "/figmaAssets/icon.svg",
    title: "Welcome & Health Check",
    description:
      "Every pup begins their day with a cheerful greeting from our trained\nstaff. We do a quick visual health and mood check to ensure they're\nready for a fun, safe day.",
  },
  {
    number: "02",
    icon: null,
    title: null,
    description: null,
  },
  {
    number: "03",
    icon: null,
    title: null,
    description: null,
  },
  {
    number: "04",
    icon: null,
    title: null,
    description: null,
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1f1f1f] py-[120px]">
      <div className="absolute top-[59px] right-[67px] w-[357px] h-[289px] bg-[url(/figmaAssets/shape1-58-png.png)] bg-cover bg-[50%_50%]" />

      <div className="container mx-auto px-3">
        <div className="flex flex-col gap-4 mb-[42px]">
          <Badge className="w-fit rounded-[100px] border-2 border-[#f8721f] bg-transparent px-[21px] py-[9px] h-auto">
            <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#f8721f] text-base tracking-[0] leading-6">
              Our Work Process
            </span>
          </Badge>

          <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[68.0px] max-w-[890px]">
            4-Step Process to Keep Your Dog
            <br />
            Happy, Healthy &amp; Loved Every Day
          </h2>
        </div>

        <div className="grid grid-cols-4 border-t border-[#353535]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border-r border-[#353535] pt-[79px] pb-[79px] px-10 min-h-[435px]"
            >
              <div className="absolute top-[55px] right-10 [font-family:'Fredoka',Helvetica] font-semibold text-[#ffffff1a] text-[64px] tracking-[0] leading-[90.7px] whitespace-nowrap">
                STEP {step.number}
              </div>

              {step.icon && (
                <>
                  <img
                    className="w-[99px] h-[81px] mb-[60px]"
                    alt="Icon"
                    src={step.icon}
                  />

                  <h3 className="[font-family:'Fredoka',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[34.0px] mb-[21px]">
                    {step.title}
                  </h3>

                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#a9acbd] text-base tracking-[0] leading-7 whitespace-pre-line">
                    {step.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

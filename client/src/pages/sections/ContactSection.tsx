import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  "Fast. Deep, comprehensive answers in seconds",
  "Accurate.Built to minimise errors/hallucination.",
  "Trustworthy.Always backed by evidence.",
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[839px] bg-[url(/figmaAssets/image.png)] bg-[100%_100%]">
      <div className="top-[168px] left-[58px] w-[137px] h-[115px] bg-[url(/figmaAssets/img.png)] absolute bg-cover bg-[50%_50%]" />

      <div className="top-[168px] left-[1187px] w-[195px] h-[174px] bg-[url(/figmaAssets/img-1.png)] absolute bg-cover bg-[50%_50%]" />

      <div className="top-[419px] left-[1090px] w-[321px] h-[234px] bg-[url(/figmaAssets/img-2.png)] absolute bg-cover bg-[50%_50%]" />

      <div className="absolute top-[228px] left-[60px] w-[646px] h-[198px] flex items-center justify-center">
        <h1 className="[font-family:'Fredoka',Helvetica] font-bold text-[84px] tracking-[0] leading-[95.9px]">
          <span className="text-[#02000f]">
            Daycare That
            <br />
            Dogs{" "}
          </span>
          <span className="text-[#f8721f]">Drool Over.</span>
        </h1>
      </div>

      <ul className="absolute w-[calc(100%_-_792px)] top-[443px] left-[60px] h-[94px] flex flex-col gap-1">
        {features.map((feature, index) => (
          <li key={index} className="flex-1 max-h-[28.8px] flex gap-2.5">
            <div className="mt-3 w-1 h-1 bg-[#02000f] rounded-sm" />
            <p className="flex items-center justify-center mt-[3px] [font-family:'Onest',Helvetica] font-normal text-[#02000f] text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
              {feature}
            </p>
          </li>
        ))}
      </ul>

      <div className="absolute top-[calc(50.00%_+_163px)] left-[60px] flex gap-[24px]">
        <Button className="w-[145px] h-14 bg-[#f8721f] hover:bg-[#e66310] rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          Learn More
        </Button>

        <Button className="w-[235px] h-14 bg-[#02000f] hover:bg-[#1a1825] rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          Get Your First Day Free
        </Button>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  "Fast. Deep, comprehensive answers in seconds",
  "Accurate. Built to minimise errors/hallucination.",
  "Trustworthy. Always backed by evidence.",
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[839px] bg-[#fff5ed] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/figmaAssets/image.png)] bg-cover bg-center opacity-20" />
      
      <div className="absolute top-[168px] left-[58px] w-[137px] h-[115px]">
        <img src="/figmaAssets/img.png" alt="Decorative shape" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-[168px] right-[58px] w-[195px] h-[174px]">
        <img src="/figmaAssets/img-1.png" alt="Decorative shape" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-[419px] right-[29px] w-[321px] h-[234px]">
        <img src="/figmaAssets/img-2.png" alt="Decorative dog" className="w-full h-full object-cover" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-[650px]">
          <h1 className="[font-family:'Fredoka',sans-serif] font-bold text-[56px] lg:text-[84px] tracking-[0] leading-[1.15] mb-8">
            <span className="text-[#02000f]">
              A Clinic Pets
              <br />
              Love{" "}
            </span>
            <span className="text-[#167f74]">Walking Into.</span>
          </h1>

          <ul className="flex flex-col gap-3 mb-12">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#02000f] rounded-full mt-2 flex-shrink-0" />
                <p className="[font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base lg:text-lg leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="h-14 px-8 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] [font-family:'Onest',sans-serif] font-normal text-white text-base">
              Learn More
            </Button>

            <Button className="h-14 px-8 bg-[#02000f] hover:bg-[#1a1825] rounded-[50px] [font-family:'Onest',sans-serif] font-normal text-white text-base">
              Get Your First Day Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

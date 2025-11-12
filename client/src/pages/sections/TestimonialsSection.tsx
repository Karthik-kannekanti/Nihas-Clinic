import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[30px] [background:url(../figmaAssets/background-2.png)_50%_50%_/_cover]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#02000f] rounded-[30px] opacity-70" />

      <div className="relative w-full flex flex-col items-center py-[120px] px-4">
        <Badge
          variant="outline"
          className="h-[38px] px-[21px] rounded-[100px] border-2 border-white bg-transparent text-white text-base leading-6 [font-family:'Fredoka',Helvetica] font-medium tracking-[0] whitespace-nowrap"
        >
          Our Features
        </Badge>

        <h2 className="text-center mt-[13.6px] max-w-[651.61px] [font-family:'Fredoka',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[68.0px]">
          Do You Have Specific
          <br />
          Customize Requirements?
        </h2>

        <p className="text-center mt-[34.0px] max-w-[668.59px] [font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-7">
          If you have unique storage requirements, our team is ready to work
          with you to develop a<br />
          customized solution that fits your needs.
        </p>

        <Button className="mt-[46px] w-[244.95px] h-14 bg-white hover:bg-white/90 rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-[#f8721f] text-base text-center tracking-[0] leading-4">
          Get Customized Solution
        </Button>
      </div>
    </section>
  );
};

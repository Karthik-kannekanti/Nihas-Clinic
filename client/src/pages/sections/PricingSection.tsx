import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const serviceOptions = [
  { id: "daycare", label: "Day Care" },
  { id: "dogwalking", label: "Dog Walking" },
  { id: "doggrooming", label: "Dog Grooming" },
  { id: "dogtraining", label: "Dog Training" },
  { id: "dogboarding", label: "Dog Boarding" },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12">
      <div className="absolute top-1.5 right-0 w-[249px] h-[193px] bg-[url(/figmaAssets/shape1-36-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[228px] left-0 w-[213px] h-[147px] bg-[url(/figmaAssets/shape1-37-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-1.5 right-0 w-[574px] h-[638px] bg-[url(/figmaAssets/appointment2-right-png.png)] bg-cover bg-[50%_50%]" />

      <div className="relative max-w-[687px] mx-auto">
        <div className="flex justify-center mb-[26px]">
          <Badge
            variant="outline"
            className="h-auto px-5 py-2 rounded-[100px] border-2 border-[#f8721f] bg-transparent"
          >
            <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#f8721f] text-base text-center tracking-[0] leading-6">
              Appointment
            </span>
          </Badge>
        </div>

        <h2 className="mb-[43px] [font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] text-center tracking-[0] leading-[68.0px]">
          We are best in
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-[25px]">
            <Input
              placeholder="Your Name"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
            <Input
              placeholder="Company Email*"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
            <Input
              placeholder="Phone Number"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
          </div>

          <div className="bg-[#eff0f4] rounded-[100px] p-[17px] px-[35px]">
            <div className="grid grid-cols-4 gap-x-[49px] gap-y-[11px]">
              {serviceOptions.map((service, index) => (
                <div key={service.id} className="flex items-center gap-[8.7px]">
                  <Checkbox
                    id={service.id}
                    className="h-[15.6px] w-[15.6px] bg-white rounded-[2.5px] border border-[#767676] data-[state=checked]:bg-white data-[state=checked]:border-[#767676]"
                  />
                  <label
                    htmlFor={service.id}
                    className="[font-family:'Onest',Helvetica] font-medium text-[#4e4e4e] text-base tracking-[0] leading-[26px] whitespace-nowrap cursor-pointer"
                  >
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[25px]">
            <Input
              placeholder="Select Date*"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
            <Input
              placeholder="Select Time*"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
            <Input
              placeholder="Meeting Type*"
              className="h-14 bg-white rounded-[30px] border-2 border-[#02000f] px-[22px] [font-family:'Onest',Helvetica] font-normal text-[#1c1c25] text-base"
            />
          </div>

          <Button className="w-full h-14 bg-[#f8721f] hover:bg-[#f8721f]/90 rounded-[50px] [font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
            Submit Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

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
    <section className="relative w-full py-20 bg-[#02000f] overflow-hidden">
      <div className="absolute top-0 left-0 w-[200px] h-[300px]">
        <img src="/figmaAssets/shape1-37-png.png" alt="Decorative shape" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="absolute top-20 right-0 w-[600px] h-[600px]">
        <img src="/figmaAssets/appointment2-right-png.png" alt="Dog" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-0 right-20 w-[250px] h-[200px]">
        <img src="/figmaAssets/shape1-36-png.png" alt="Decorative shape" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="relative max-w-[720px] mx-auto px-6 lg:px-0 z-10">
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="h-auto px-6 py-2 rounded-[100px] border-2 border-[#167f74] bg-transparent"
            >
            <span className="[font-family:'Fredoka',sans-serif] font-medium text-[#167f74] text-base">
              Appointment
            </span>
          </Badge>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              placeholder="Your Name"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base placeholder:text-gray-400"
            />
            <Input
              placeholder="Company Email*"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base placeholder:text-gray-400"
            />
            <Input
              placeholder="Phone Number"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base placeholder:text-gray-400"
            />
          </div>

          <div className="bg-white rounded-[30px] p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceOptions.map((service) => (
                <div key={service.id} className="flex items-center gap-3">
                  <Checkbox
                    id={service.id}
                    className="h-4 w-4 rounded border-gray-400 data-[state=checked]:bg-[#167f74] data-[state=checked]:border-[#167f74]"
                  />
                  <label
                    htmlFor={service.id}
                    className="[font-family:'Onest',sans-serif] font-normal text-[#02000f] text-sm cursor-pointer"
                  >
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              type="date"
              placeholder="Select Date*"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base"
            />
            <Input
              type="time"
              placeholder="Select Time*"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base"
            />
            <Input
              placeholder="Meeting Type*"
              className="h-14 bg-white rounded-[30px] border-0 px-6 [font-family:'Onest',sans-serif] font-normal text-[#02000f] text-base placeholder:text-gray-400"
            />
          </div>

          <Button className="w-full h-14 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] [font-family:'Onest',sans-serif] font-normal text-white text-base">
            Submit Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

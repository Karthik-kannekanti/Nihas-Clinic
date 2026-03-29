import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    id: 1,
    title: "Relaxe Bath & Full Grooming",
    price: "From $35.00",
    description:
      "Grooming service for a small dog include\nbathing, ear cleaning and grooming",
    image: "/figmaAssets/relaxe-bath---full-grooming.png",
    type: "large",
  },
  {
    id: 2,
    title: "Body Massage & Hair Style",
    price: "From $55.00",
    description:
      "Grooming service for a small dog include bathing, ear\ncleaning and grooming",
    image: "/figmaAssets/body-massage---hair-style.png",
    type: "small",
  },
  {
    id: 3,
    title: "Spa & Nail Cutting",
    price: "From $65.99",
    description:
      "Spa & Menicure service for a small pet include bathing,\near cleaning and grooming.",
    image: "/figmaAssets/spa---nail-cutting.png",
    type: "small",
  },
];

const decorativeShapes = [
  {
    top: "top-[184px]",
    left: "left-[72px]",
    width: "w-[76px]",
    height: "h-[57px]",
    image: "/figmaAssets/shape1-17-png.png",
  },
  {
    top: "top-[184px]",
    left: "left-[1304px]",
    width: "w-16",
    height: "h-[70px]",
    image: "/figmaAssets/shape1-12-png.png",
  },
  {
    top: "top-[606px]",
    left: "left-[72px]",
    width: "w-[66px]",
    height: "h-[67px]",
    image: "/figmaAssets/shape1-6-png.png",
  },
  {
    top: "top-[599px]",
    left: "left-[1303px]",
    width: "w-[65px]",
    height: "h-[76px]",
    image: "/figmaAssets/shape1-5-png.png",
  },
  {
    top: "top-[737px]",
    left: "-left-3.5",
    width: "w-[386px]",
    height: "h-[184px]",
    image: "/figmaAssets/shape1-24-png.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 bg-[#f6f2ed] overflow-hidden">
      {decorativeShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`${shape.top} ${shape.left} ${shape.width} ${shape.height} bg-[url(${shape.image})] absolute bg-cover bg-[50%_50%]`}
        />
      ))}

      <div className="container mx-auto px-4">
        <header className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              className="w-[31px] h-6"
              alt="Subtitle icon"
              src="/figmaAssets/subtitle-icon-1.svg"
            />
            <img
              className="h-3.5"
              alt="Decorative line"
              src="/figmaAssets/image-3.png"
            />
            <div className="[font-family:'Fredoka',Helvetica] font-medium text-[#167f74] text-base tracking-[0] leading-6 whitespace-nowrap">
              Testimonials
            </div>
            <img
              className="h-3.5"
              alt="Decorative line"
              src="/figmaAssets/image-3.png"
            />
          </div>

          <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] text-center tracking-[0] leading-[68.0px] whitespace-nowrap mb-6">
            Loyal Hearts, Forever Homes.
          </h2>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-lg text-center tracking-[0] leading-[31.5px] max-w-[730px]">
            Read the heartwarming stories of those who gave a second chance to
            animals in need.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1320px] mx-auto">
          <Card className="rounded-2xl overflow-hidden border-0 shadow-none bg-[url(/figmaAssets/mask-group-5.svg)] bg-[100%_100%]">
            <CardContent className="p-10">
              <div className="mb-5">
                <div className="w-full h-[241px] rounded-2xl bg-[url(/figmaAssets/relaxe-bath---full-grooming.png)] bg-cover bg-[50%_50%]" />
              </div>

              <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-2xl tracking-[0] leading-[34.0px] mb-2">
                Relaxe Bath &amp; Full Grooming
              </h3>

              <div className="[font-family:'Onest',Helvetica] font-normal text-[#02000f] text-xl tracking-[0] leading-[35px] mb-4">
                From $35.00
              </div>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base tracking-[0] leading-[25.6px] mb-6">
                Grooming service for a small dog include
                <br />
                bathing, ear cleaning and grooming
              </p>

              <div className="flex justify-end">
                <Button className="h-14 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] px-8">
                  <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
                    Enquire Now
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="rounded-2xl overflow-hidden border-0 shadow-none bg-[url(/figmaAssets/mask-group-1.svg)] bg-[100%_100%]">
              <CardContent className="p-10">
                <div className="flex gap-6 mb-6">
                  <div className="w-[132px] h-[140px] rounded-2xl bg-[url(/figmaAssets/body-massage---hair-style.png)] bg-cover bg-[50%_50%] flex-shrink-0" />

                  <div className="flex-1">
                    <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-2xl tracking-[0] leading-[34.0px] mb-2">
                      Body Massage &amp; Hair Style
                    </h3>

                    <div className="[font-family:'Onest',Helvetica] font-normal text-[#02000f] text-xl tracking-[0] leading-[35px] mb-4">
                      From $55.00
                    </div>

                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base tracking-[0] leading-[25.6px]">
                      Grooming service for a small dog include bathing, ear
                      <br />
                      cleaning and grooming
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="h-12 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] px-8">
                    <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
                      Enquire Now
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl overflow-hidden border-0 shadow-none bg-[url(/figmaAssets/mask-group-11.svg)] bg-[100%_100%]">
              <CardContent className="p-10">
                <div className="flex gap-6 mb-6">
                  <div className="w-[132px] h-[140px] rounded-2xl bg-[url(/figmaAssets/spa---nail-cutting.png)] bg-cover bg-[50%_50%] flex-shrink-0" />

                  <div className="flex-1">
                    <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-2xl tracking-[0] leading-[34.0px] mb-2">
                      Spa &amp; Nail Cutting
                    </h3>

                    <div className="[font-family:'Onest',Helvetica] font-normal text-[#02000f] text-xl tracking-[0] leading-[35px] mb-4">
                      From $65.99
                    </div>

                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base tracking-[0] leading-[25.6px]">
                      Spa &amp; Menicure service for a small pet include
                      bathing,
                      <br />
                      ear cleaning and grooming.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="h-12 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] px-8">
                    <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
                      Enquire Now
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

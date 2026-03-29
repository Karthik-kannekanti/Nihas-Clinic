import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderSection } from "./HeaderSection";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[533px] px-8 pt-8 pb-0">
      <div className="relative w-full h-[501px] rounded-[32px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(../figmaAssets/background.png)" }}
        />
        <div className="absolute inset-0 bg-[#02000f] opacity-50" />

        <HeaderSection />

        <div className="relative z-10 flex flex-col items-center justify-center gap-[145px]">
          <h1 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-[56px] text-center tracking-[0] leading-[72.0px] whitespace-nowrap">
            Services
          </h1>

          <div className="relative w-[619px] h-[73px] bg-[url(/figmaAssets/mask-group-13.svg)] bg-[length:100%_100%] bg-no-repeat flex items-center justify-center">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center gap-2">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="[font-family:'Fredoka',Helvetica] font-medium text-[#02000f] text-2xl leading-[26px] tracking-[0] no-underline hover:text-[#02000f]"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#02000f] text-lg leading-[26px] tracking-[0]">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="[font-family:'Fredoka',Helvetica] font-medium text-[#167f74] text-2xl leading-[26px] tracking-[0]">
                    Services
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
};

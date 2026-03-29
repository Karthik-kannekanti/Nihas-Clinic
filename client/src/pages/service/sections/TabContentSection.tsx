import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    title: "Bathing & Drying",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-14.svg",
    icon: "/figmaAssets/85.svg",
  },
  {
    title: "Dog Sitting",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-6.svg",
    icon: "/figmaAssets/87.svg",
  },
  {
    title: "Hair Styling",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-8.svg",
    icon: "/figmaAssets/89.svg",
  },
  {
    title: "Teeth Cleaning",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-9.svg",
    icon: "/figmaAssets/91.svg",
  },
  {
    title: "Nail trimming",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-12.svg",
    icon: "/figmaAssets/93.svg",
  },
  {
    title: "Flea treatment",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-3.svg",
    icon: "/figmaAssets/95.svg",
  },
  {
    title: "Dental Hygiene Services",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-2.svg",
    icon: "/figmaAssets/97.svg",
  },
  {
    title: "Paw Care Services",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group-10.svg",
    icon: "/figmaAssets/99.svg",
  },
  {
    title: "Flea Control Solutions",
    description:
      "Experience the ultimate shedding solution\nwith our Bath & Deshed service",
    backgroundImage: "/figmaAssets/mask-group.svg",
    icon: "/figmaAssets/101.svg",
  },
];

export const TabContentSection = (): JSX.Element => {
  return (
    <section className="w-full px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {serviceCards.map((service, index) => (
          <Card
            key={index}
            className="relative h-[500px] overflow-hidden border-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
          >
            <CardContent className="relative h-full p-0 flex flex-col">
              <img
                className="self-end mr-[4.4px] w-[79.2px] h-[79.2px] mt-[-3.6px]"
                alt={service.title}
                src={service.icon}
              />

              <div className="mt-auto ml-12 mb-[13.8px] flex flex-col gap-[13.8px]">
                <h3 className="[font-family:'Fredoka',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[34.0px]">
                  {service.title}
                </h3>

                <p className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-7 max-w-[312.11px]">
                  {service.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

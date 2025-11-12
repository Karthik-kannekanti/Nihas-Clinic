import { ArrowRightIcon, StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Simon",
    role: "Pet Expert",
    image: "/figmaAssets/team-2-1.png",
    rating: "4.9",
  },
  {
    name: "Jessica Lauren",
    role: "Pet Expert",
    image: "/figmaAssets/team-2-2.png",
    rating: "4.9",
  },
  {
    name: "Jenny William",
    role: "Pet Expert",
    image: "/figmaAssets/team-2-3.png",
    rating: "4.9",
  },
  {
    name: "Daniel Thomas",
    role: "Pet Expert",
    image: "/figmaAssets/team-2-4.png",
    rating: "4.9",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[120px] [background:url(../figmaAssets/background.png)_50%_50%_/_cover]">
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center gap-[14px] mb-[43px]">
          <Badge
            variant="outline"
            className="h-[38px] px-5 rounded-[100px] border-2 border-[#f8721f] bg-transparent"
          >
            <span className="text-[#f8721f] text-base [font-family:'Fredoka',Helvetica] font-medium">
              Our Members
            </span>
          </Badge>

          <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] text-center leading-[68px] whitespace-nowrap">
            Get The Massive Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white rounded-[25px] border border-[#c6c9d480] overflow-hidden"
            >
              <CardContent className="p-[11px] pb-[31px]">
                <div className="relative rounded-[25px] overflow-hidden mb-[24px]">
                  <div
                    className="w-full h-[347px] rounded-[25px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-[#f8721f] rounded-[30px] px-3 h-8">
                    <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base leading-[26px]">
                      {member.rating}
                    </span>
                    <StarIcon className="w-[17px] h-[15px] fill-white text-white" />
                  </div>
                </div>

                <div className="px-5">
                  <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-2xl leading-[34px] mb-[3px]">
                    {member.name}
                  </h3>

                  <p className="[font-family:'Fredoka',Helvetica] font-normal text-[#74787c] text-base leading-[26px] mb-[27px]">
                    {member.role}
                  </p>

                  <div className="flex justify-end">
                    <button className="w-[45px] h-[45px] flex items-center justify-center rounded-[22.5px] border border-[#c6c9d480] hover:border-[#f8721f] transition-colors">
                      <ArrowRightIcon className="w-4 h-4 text-[#f8721f]" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      '"babet Has Been A Lifesaver For Our Family. I Used To feel So Guilty Leaving Bella Alone While I Worked. since Finding Babet, I Drop Her Off Every Morning',
    name: "Sarah Johnson",
    title: "Marketing Manager, ABC Center",
    image: null,
  },
  {
    quote:
      '"babet Has Been A Lifesaver For Our Family. I Used To feel So Guilty Leaving Bella Alone While I Worked. Since finding Babet, I Drop Her Off Every Morning Knowing ..."',
    name: "Alex Michel",
    title: "Marketing Manager, ABC Center",
    image: "/figmaAssets/testi2-1.png",
  },
  {
    quote:
      '"babet Has Been A Lifesaver For Our Family. I Used To feel So Guilty Leaving Bella Alone While I Worked. since Finding Babet, I Drop Her Off Every Morning knowing ..."',
    name: "Katrine Katija",
    title: "Marketing Manager, ABC Center",
    image: null,
  },
];

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="w-full py-[120px] bg-[#f6f2ed] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Badge
            variant="outline"
            className="h-[38px] px-5 rounded-[100px] border-2 border-[#167f74] bg-transparent text-[#167f74] text-base font-medium [font-family:'Fredoka',Helvetica] hover:bg-transparent"
          >
            Our Feedbacks
          </Badge>

          <h2 className="mt-[13.6px] max-w-[741.62px] text-center [font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] leading-[68px] tracking-[0]">
            What Pet Parents Are Saying
            <br />
            About Their Babet
            <br />
            Experience
          </h2>

          <div className="relative w-full mt-[43px] overflow-hidden">
            <div className="flex gap-6 justify-center items-start px-4">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-full max-w-[555px] bg-white rounded-[30px] border-0 ${
                    index === 1 ? "shadow-[0px_8px_29px_-3px_#64646f33]" : ""
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {index === 1 && testimonial.image && (
                        <div className="relative pt-[30px] pl-[25px] pb-[20px]">
                          <div className="absolute left-[25px] top-[30px] w-[220px] h-40 rounded-[95px] border-[3px] border-solid border-[#167f74] rotate-[-18deg]" />
                          <div className="absolute left-[20px] top-[37px] w-[273px] h-[211px] rounded-[121px] rotate-[-18deg] blur-[17.5px] bg-[linear-gradient(180deg,rgba(248,114,31,1)_0%,rgba(248,114,31,0)_100%)] opacity-40" />
                          <div
                            className="relative w-[220px] h-[225px] bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${testimonial.image})`,
                            }}
                          />
                        </div>
                      )}

                      <div className="px-[50px] pt-[41px] pb-[23px]">
                        <div className="pb-[23px] border-b border-[#e2e2e2]">
                          <p className="[font-family:'Onest',Helvetica] font-normal text-[#4e4e4e] text-lg leading-[30px] tracking-[0]">
                            {testimonial.quote}
                          </p>
                        </div>

                        <h3 className="mt-[23px] [font-family:'Fredoka',Helvetica] font-medium text-[#02000f] text-2xl leading-[34px] tracking-[0]">
                          {testimonial.name}
                        </h3>

                        <p className="mt-[5px] [font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-sm leading-[24.5px] tracking-[0]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

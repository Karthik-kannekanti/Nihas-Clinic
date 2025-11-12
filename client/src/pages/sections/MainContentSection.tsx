import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingPlans = [
  {
    title: "Dog Grooming",
    description:
      "Our AI is dependent on you to direct it. Ask any\nquestion, any time.",
    price: "1000",
    features: [
      { text: "Fast. Deep, comprehensive answers", enabled: true },
      { text: "Accurate. Built to minimise hallucination", enabled: true },
      { text: "Trustworthy. Always backed by evidence", enabled: true },
      { text: "Scalable. Analyse hours of conversations", enabled: false },
      { text: "Accurate. Built to minimise hallucination", enabled: false },
    ],
    isBestValue: false,
  },
  {
    title: "Standard Plan",
    description:
      "Our AI is dependent on you to direct it. Ask\nany question, any time.",
    price: "1200",
    features: [
      { text: "Fast. Deep, comprehensive answers", enabled: true },
      { text: "Accurate. Built to minimise hallucination", enabled: true },
      { text: "Trustworthy. Always backed by evidence", enabled: true },
      { text: "Scalable. Analyse hours of conversations", enabled: true },
      { text: "Accurate. Built to minimise hallucination", enabled: false },
    ],
    isBestValue: true,
  },
  {
    title: "Standard Plan",
    description:
      "Our AI is dependent on you to direct it. Ask any\nquestion, any time.",
    price: "1500",
    features: [
      { text: "Fast. Deep, comprehensive answers", enabled: true },
      { text: "Accurate. Built to minimise hallucination", enabled: true },
      { text: "Trustworthy. Always backed by evidence", enabled: true },
      { text: "Scalable. Analyse hours of conversations", enabled: true },
      { text: "Accurate. Built to minimise hallucination", enabled: true },
    ],
    isBestValue: false,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-[120px] px-12 bg-[linear-gradient(180deg,rgba(246,242,237,0.9)_0%,rgba(246,242,237,1)_57%)] [background:url(../figmaAssets/background-1.png)_50%_50%_/_cover]">
      <div className="max-w-[1344px] mx-auto">
        <div className="flex items-start justify-between mb-[79px]">
          <div>
            <Badge className="h-auto mb-[14px] px-[21px] py-[9px] rounded-[100px] border-2 border-[#f8721f] bg-transparent text-[#f8721f] [font-family:'Fredoka',Helvetica] font-medium text-base hover:bg-transparent">
              Service Plan
            </Badge>
            <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] leading-[68px]">
              Our Pricing Plan
            </h2>
          </div>

          <div className="flex items-center gap-0 bg-[#f8721f1a] rounded-[100px] border border-solid border-[#f8721f] p-[11px] h-[72px]">
            <Button className="h-[50px] px-[42px] bg-[#f8721f] rounded-[30px] [font-family:'Onest',Helvetica] font-semibold text-white text-base hover:bg-[#f8721f]/90">
              Monthly
            </Button>
            <div className="px-[42px] [font-family:'Onest',Helvetica] font-semibold text-[#02000f] text-base">
              Yearly
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[8px]">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.isBestValue && (
                <div className="absolute -top-[25px] left-0 right-0 flex justify-center z-10">
                  <div className="bg-[#f8721f] rounded-t-[30px] px-[10px] py-[13px]">
                    <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                      BEST VALUE FOR YOU
                    </span>
                  </div>
                </div>
              )}
              <Card
                className={`${
                  plan.isBestValue ? "mt-[-25px]" : ""
                } bg-white rounded-[30px] shadow-[0px_10px_50px_#00000014] border-0`}
              >
                <CardContent className="p-0">
                  {plan.isBestValue && (
                    <div className="bg-[#f8721f] rounded-t-[30px] h-[55px]"></div>
                  )}
                  <div className={plan.isBestValue ? "p-[27px]" : "p-[35px]"}>
                    <h3 className="[font-family:'Fredoka',Helvetica] font-bold text-[#02000f] text-3xl leading-[42.5px] mb-[17px]">
                      {plan.title}
                    </h3>

                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base leading-7 mb-[4px] whitespace-pre-line">
                      {plan.description}
                    </p>

                    <div className="flex items-center justify-between py-[25px] border-b border-[#4e4e4e33] mb-[25px]">
                      <Button
                        variant="ghost"
                        className="h-auto px-0 [font-family:'Onest',Helvetica] font-medium text-[#02000f] text-base hover:bg-transparent"
                      >
                        Select Plan
                      </Button>

                      <div className="flex items-baseline">
                        <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#02000f] text-xl">
                          $
                        </span>
                        <span className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-3xl leading-[40px] mx-[3px]">
                          {plan.price}
                        </span>
                        <span className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base">
                          /mon
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-[11.6px]"
                        >
                          <CheckIcon
                            className={`w-4 h-4 mt-[3px] flex-shrink-0 ${
                              feature.enabled
                                ? "text-[#272421]"
                                : "text-[#a1a4b1] opacity-50"
                            }`}
                          />
                          <span className="[font-family:'Onest',Helvetica] font-medium text-[#272421] text-base leading-7">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

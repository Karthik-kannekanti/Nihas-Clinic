import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    number: "1.",
    question: "How often should I take my pet to the vet?",
    answer:
      "For most pets, a yearly checkup is recommended to monitor their overall health, update vaccinations, and catch early signs of illness. Senior pets or those with chronic conditions may require more frequent visits.",
  },
  {
    id: "item-2",
    number: "2.",
    question: "How can I book an appointment for emergency treatment?",
    answer: "",
  },
  {
    id: "item-3",
    number: "3.",
    question: "How often should I bathe my pet?",
    answer: "",
  },
  {
    id: "item-4",
    number: "4.",
    question: "What should I do if my pet eats something toxic?",
    answer: "",
  },
  {
    id: "item-5",
    number: "5.",
    question: "Is it normal for pets to be anxious or fearful?",
    answer: "",
  },
];

export const BackgroundSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f6f6f6] py-[120px] px-[60px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start gap-4 mb-[45px]">
          <img
            className="w-[31px] h-6"
            alt="Subtitle icon"
            src="/figmaAssets/subtitle-icon.svg"
          />
          <img
            className="w-[141px] h-3.5"
            alt="Image"
            src="/figmaAssets/image-3.png"
          />
        </div>

        <div className="mb-[43px] [font-family:'Fredoka',Helvetica] font-medium text-[#167f74] text-base tracking-[0] leading-6">
          quick answers
        </div>

        <h2 className="mb-[67px] [font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] tracking-[0] leading-[68.0px]">
          Frequently Ask Questions
        </h2>

        <div className="flex gap-[54px]">
          <div className="flex-1 max-w-[663px]">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="flex flex-col gap-[24px]"
            >
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-lg overflow-hidden border-none"
                >
                  <AccordionTrigger className="px-[30px] py-[27px] hover:no-underline [&[data-state=open]]:pb-[13px]">
                    <div className="flex items-center gap-[19px] text-left">
                      <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#02000f] text-lg tracking-[0] leading-[26px]">
                        {faq.number}
                      </span>
                      <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#02000f] text-lg tracking-[0] leading-[26px]">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="px-[60px] pb-[30px] pt-0">
                      <p className="[font-family:'Onest',Helvetica] font-normal text-[#6c6d71] text-base tracking-[0] leading-7">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex-1 max-w-[563px]">
            <div className="w-full h-[629px] rounded-[32px] bg-[url(/figmaAssets/faq-img-1-1.png)] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

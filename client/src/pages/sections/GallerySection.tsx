import React from "react";

export const GallerySection = (): JSX.Element => {
  const marqueeItems = [
    { text: "your dog's safety", width: "w-[232.96px]" },
    { text: "Pet Care", width: "w-[117.33px]" },
    { text: "comfort", width: "w-[107.78px]" },
    { text: "Want to schedule a visit", width: "w-[322.56px]" },
    { text: "or trial day!", width: "w-[157.64px]" },
    { text: "Owners drop off", width: "w-[217.85px]" },
    { text: "heir pups to smiling staff", width: "w-[331.28px]" },
  ];

  return (
    <section className="w-full overflow-hidden py-[100px]">
      <div className="relative h-[66.5px] bg-[#f8721f] overflow-hidden">
        <div
          className="flex items-center gap-0 animate-marquee"
          style={{ "--duration": "30s" } as React.CSSProperties}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-item-${index}`}
              className="flex items-center justify-center h-[66px] rounded-[28px] px-[17px] flex-shrink-0"
            >
              <div
                className={`${item.width} h-9 [font-family:'Fredoka',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[22.5px] flex items-center justify-center`}
              >
                {item.text}
              </div>
            </div>
          ))}
          {marqueeItems.map((item, index) => (
            <div
              key={`marquee-item-duplicate-${index}`}
              className="flex items-center justify-center h-[66px] rounded-[28px] px-[17px] flex-shrink-0"
            >
              <div
                className={`${item.width} h-9 [font-family:'Fredoka',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[22.5px] flex items-center justify-center`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

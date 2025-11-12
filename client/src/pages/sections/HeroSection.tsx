import React from "react";

export const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-[839px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('https://www.figma.com/api/mcp/asset/f4094a95-34d4-4a87-9dac-d6b60466f787')",
        backgroundColor: "#FFF5ED"
      }}
    >
      <div className="absolute left-[58px] top-[168px] w-[137px] h-[115px]">
        <img
          src="https://www.figma.com/api/mcp/asset/345cc382-a6fd-479f-b93d-51cf8bb75b34"
          alt="Decorative element"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute right-[58px] top-[168px] w-[195px] h-[174px]">
        <img
          src="https://www.figma.com/api/mcp/asset/427a54ff-8c0f-4959-a184-27b5efc99a64"
          alt="Decorative element"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute right-[29px] top-[419px] w-[321px] h-[234px]">
        <img
          src="https://www.figma.com/api/mcp/asset/8cdfc5c9-ec64-4eac-bbc4-fd12568614b2"
          alt="Decorative element"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-15 pt-[120px]">
        <h1 
          className="max-w-[646px] ml-[60px] text-[84px] font-bold leading-[96px]"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#02000F" }}
        >
          Daycare That{" "}
          <span>Dogs </span>
          <span className="text-orange-500">Drool Over.</span>
        </h1>

        <div className="ml-[60px] mt-8 space-y-4 max-w-[648px]">
          <div className="flex items-start gap-3">
            <div className="w-1 h-1 bg-gray-900 rounded-full mt-3"></div>
            <p 
              className="text-lg text-gray-900"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Fast. Deep, comprehensive answers in seconds
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1 h-1 bg-gray-900 rounded-full mt-3"></div>
            <p 
              className="text-lg text-gray-900"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Accurate.Built to minimise errors/hallucination.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1 h-1 bg-gray-900 rounded-full mt-3"></div>
            <p 
              className="text-lg text-gray-900"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Trustworthy.Always backed by evidence.
            </p>
          </div>
        </div>

        <div className="ml-[60px] mt-12 flex gap-6">
          <button 
            className="px-8 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            Learn More
          </button>
          <button 
            className="px-8 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            Get Your First Day Free
          </button>
        </div>
      </div>
    </section>
  );
};

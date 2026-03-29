import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Services" },
  { label: "Our Groomers" },
  { label: "Book an Appointment" },
];

const resources = [
  { label: "Articles & Tips" },
  { label: "Preventative Care" },
  { label: "Our Blog" },
  { label: "Investors Relations" },
  { label: "Term & Conditions" },
];

const services = [
  { label: "Dog & Cat Grooming" },
  { label: "Bath & Brush" },
  { label: "Haircuts & Styling" },
  { label: "Nail Trimming" },
  { label: "Ear Cleaning" },
];

const support = [
  { label: "Help Center" },
  { label: "Faq" },
  { label: "Contact Us" },
  { label: "Ticket Support" },
  { label: "Live Chat" },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: TwitterIcon, label: "Twitter" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#1f1f1f] overflow-hidden">
      <div className="absolute top-[428px] left-px w-[215px] h-[312px] bg-[url(/figmaAssets/footer-default-cta-thumb-3-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[604px] left-[1306px] w-[76px] h-[78px] bg-[url(/figmaAssets/shape1-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[413px] left-[1288px] w-[66px] h-[69px] bg-[url(/figmaAssets/shape2-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[259px] left-[1293px] w-[104px] h-[75px] bg-[url(/figmaAssets/shape3-png.png)] bg-cover bg-[50%_50%]" />

      <div className="relative w-full bg-white rounded-[0px_0px_24px_24px] h-[183px]">
        <div className="top-[30px] left-[620px] w-[154px] h-[198px] bg-[url(/figmaAssets/img.png)] absolute bg-cover bg-[50%_50%]" />

        <div className="top-5 left-[782px] w-[107px] h-[163px] bg-[url(/figmaAssets/img-1.png)] absolute bg-cover bg-[50%_50%]" />

        <div className="absolute top-[calc(50%_-_28px)] right-[382px]">
          <Button className="w-60 h-14 bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] text-white text-base [font-family:'Onest',Helvetica]">
            Make Appointment
            <img
              className="w-[22px] h-[22px] ml-2"
              alt="Mask group"
              src="/figmaAssets/mask-group-4.svg"
            />
          </Button>
        </div>

        <div className="absolute top-[calc(50%_-_28px)] right-[150px]">
          <Button className="w-[212px] h-14 bg-[#02000f] hover:bg-[#02000f]/90 rounded-[50px] text-white text-base [font-family:'Onest',Helvetica]">
            Our Specialists
            <img
              className="w-[22px] h-[22px] ml-2"
              alt="Mask group"
              src="/figmaAssets/mask-group-7.svg"
            />
          </Button>
        </div>

        <div className="absolute top-11 left-[150px] w-[422px]">
          <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[32px] tracking-[0.64px] leading-[48px]">
            Explore Our Comprehensive
            <br />
            Petcare Solutions
          </h2>
        </div>
      </div>

      <div className="relative pt-[80px] pb-[97px] px-[60px]">
        <div className="grid grid-cols-5 gap-8 mb-[97px]">
          <div className="col-span-1">
            <img
              className="w-auto h-10 mb-[52px]"
              alt="Niha's Pet Care Clinic Logo"
              src="/figmaAssets/nihas-pet-care-logo.jpg"
            />

            <p className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] mb-[38px]">
              Babet is a convenience services to the
              <br />
              adaptability, We care about every pet of our
              <br />
              clients and provide all kinds of pet care
              <br />
              services in New York.
            </p>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 flex items-center justify-center rounded-xl border border-solid border-white">
                <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] text-white text-xs"></span>
              </div>
              <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                nihaspetcareclinic@gmail.com
              </span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-xl border border-solid border-white mt-0.5">
                <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] text-white text-xs"></span>
              </div>
              <span className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                West 2nd lane, Inner circular road, New
                <br />
                York City
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-2xl tracking-[0.48px] leading-6 mb-[26px]">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-[11.6px] hover:text-white transition-colors"
                >
                  <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#a1a4b1cc] text-base leading-[21.0px]">
                    +
                  </span>
                  <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-[21.0px]">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-2xl tracking-[0.48px] leading-6 mb-[26px]">
              Resources
            </h3>
            <nav className="flex flex-col gap-5">
              {resources.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-[11.6px] hover:text-white transition-colors"
                >
                  <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#a1a4b1cc] text-base leading-[21.0px]">
                    +
                  </span>
                  <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-[21.0px]">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-2xl tracking-[0.48px] leading-6 mb-[26px]">
              Services
            </h3>
            <nav className="flex flex-col gap-5">
              {services.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-[11.6px] hover:text-white transition-colors"
                >
                  <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#a1a4b1cc] text-base leading-[21.0px]">
                    +
                  </span>
                  <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-[21.0px]">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-white text-2xl tracking-[0.48px] leading-6 mb-[26px]">
              Support
            </h3>
            <nav className="flex flex-col gap-5">
              {support.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-[11.6px] hover:text-white transition-colors"
                >
                  <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#a1a4b1cc] text-base leading-[21.0px]">
                    +
                  </span>
                  <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-[21.0px]">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-[#a1a4b133] pt-[38px] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="[font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-[#a1a4b1cc] text-base leading-4"></span>
            <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-7">
              Copyright 2025
            </span>
            <span className="[font-family:'Onest',Helvetica] font-normal text-[#167f74] text-base tracking-[0] leading-7">
              Babet
            </span>
            <span className="[font-family:'Onest',Helvetica] font-normal text-[#a1a4b1cc] text-base tracking-[0] leading-7">
              . All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="[font-family:'Roboto',Helvetica] font-normal text-[#167f74] text-base tracking-[0] leading-[26px]">
              Social Media:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-2xl border border-[#ffffff4c] hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

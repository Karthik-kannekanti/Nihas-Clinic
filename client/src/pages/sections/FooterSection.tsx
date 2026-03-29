import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "HELP FOR CALL",
    value: "+91 94921 88745",
  },
  {
    icon: MapPinIcon,
    title: "OUR ADDRESS",
    value: "123 Main Street",
  },
  {
    icon: MessageCircleIcon,
    title: "WHATSAPP",
    value: "+91 94921 88745",
  },
];

const footerLinks = [
  { text: "Terms and Conditions.", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Refund Policy", href: "#" },
  { text: "Get Support", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#1f1f1f] py-24">
      <div className="absolute -top-28 left-0 w-full h-28 bg-[url(/figmaAssets/footer-1-top-shape-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[199px] right-0 w-[371px] h-[360px] bg-[url(/figmaAssets/footer-1-shape-bottom-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[247px] left-px w-[215px] h-[312px] bg-[url(/figmaAssets/footer-default-cta-thumb-3-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[436px] right-[134px] w-[76px] h-[78px] bg-[url(/figmaAssets/shape1-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[294px] right-[152px] w-[66px] h-[69px] bg-[url(/figmaAssets/shape2-png.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[196px] right-[147px] w-[104px] h-[75px] bg-[url(/figmaAssets/shape3-png.png)] bg-cover bg-[50%_50%]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_397px] gap-8 mb-20">
          <div className="flex flex-col">
            <img
              className="w-auto h-10 mb-[68px]"
              alt="Niha's Pet Care Clinic Logo"
              src="/figmaAssets/nihas-pet-care-logo.jpg"
            />

            <p className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] mb-[37px]">
              Once checked in, your dog joins a group of
              <br />
              compatible friends for supervised playtime.
              <br />
              We organize activities...
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-[50px] h-[50px] flex items-center justify-center bg-[#29282b] rounded-[25px] hover:bg-[#3a393c] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:pl-16 lg:border-l lg:border-[#d9d9d926]">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-[28px] flex-shrink-0">
                  <contact.icon className="w-4 h-4 text-[#167f74]" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="[font-family:'Fredoka',Helvetica] font-medium text-white text-sm tracking-[0] leading-[24.5px] whitespace-nowrap mb-1">
                    {contact.title}
                  </div>
                  <div className="[font-family:'Fredoka',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[38.5px] whitespace-nowrap">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h3 className="[font-family:'Fredoka',Helvetica] font-medium text-white text-xl tracking-[0] leading-[28.3px] mb-[26px]">
              Subscribe! New subscribers get 20% off!
            </h3>

            <div className="relative mb-[39px]">
              <Input
                type="email"
                placeholder="Email address"
                className="h-[45px] bg-white rounded-[50px] border-0 pl-[30px] pr-[120px] [font-family:'Onest',Helvetica] font-normal text-[#02000f] text-sm"
              />
              <Button className="absolute top-0 right-0 h-11 w-[100px] bg-[#167f74] hover:bg-[#0f5d52] rounded-[50px] [font-family:'Onest',Helvetica] font-medium text-white text-sm">
                Subscribe
              </Button>
            </div>

            <h4 className="[font-family:'Fredoka',Helvetica] font-medium text-white text-xl tracking-[0] leading-[28.3px] mb-[20px]">
              Download App
            </h4>

            <div className="flex gap-[10px]">
              <button
                className="w-[174px] h-[65px] bg-[url(/figmaAssets/app-btn.png)] bg-cover bg-[50%_50%] hover:opacity-90 transition-opacity"
                aria-label="Download on App Store"
              />
              <button
                className="w-[171px] h-[65px] bg-[url(/figmaAssets/app-btn-1.png)] bg-cover bg-[50%_50%] hover:opacity-90 transition-opacity"
                aria-label="Get it on Google Play"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-[26px] px-[132px] rounded-[15px] border border-solid border-[#d9d9d926]">
          <div className="flex items-center gap-0 [font-family:'Onest',Helvetica] font-normal text-base tracking-[0] leading-7">
            <span className="text-white">Copyright 2025</span>
            <span className="text-[#167f74] ml-1">Babet</span>
            <span className="text-white">. All Rights Reserved.</span>
          </div>

          <nav className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] hover:text-[#167f74] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

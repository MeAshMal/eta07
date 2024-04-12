import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return;
  }
  return (
    <footer className="self-stretch bg-goldenrod overflow-hidden flex flex-col items-start justify-start pt-16 pb-7 pr-[74px] pl-[75px] gap-[25px] text-left text-base text-darkslategray-100 font-title-16px-medium mq450:pt-[42px] mq450:pb-5 mq450:box-border mq800:pl-[37px] mq800:pr-[37px] mq800:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1150:flex-wrap">
          <img
            className="h-[55px] w-[137.9px] relative overflow-hidden shrink-0"
            alt=""
            src="/logo-white.png"
          />
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium inline-block min-w-[45px]">
              Menu
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-white">
              <div className="relative inline-block min-w-[116px]">
                Shop Products
              </div>
              <div className="relative inline-block min-w-[112px]">
                Shop Services
              </div>
              <div className="relative inline-block min-w-[109px]">
                Memberships
              </div>
              <div className="relative inline-block min-w-[122px]">
                Agent Referrals
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium inline-block min-w-[43px]">
              Legal
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-white">
              <div className="relative inline-block min-w-[109px]">
                Privacy Policy
              </div>
              <div className="relative">Copyright Information</div>
              <div className="relative inline-block min-w-[106px]">
                Cookie Policy
              </div>
            </div>
          </div>
          <div className="w-56 flex flex-col items-start justify-start gap-[16px]">
            <div className="relative font-medium inline-block min-w-[101px]">
              Get in Touch
            </div>
            <div className="self-stretch h-8 flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icons/facebook.png"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icons/X.png"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icons/youtube.png"
              />
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                loading="lazy"
                alt=""
                src="/icons/linkedin.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center text-white">
        <div className="relative">
          Copyright © 2023 Etao7 LLC. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link } from "react-router-dom";

const Memberships = () => {
  const [mode, setMode] = useState("monthly");

  return (
    <div className="my-10 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[100px] tracking-[normal] mq450:gap-[25px_100px] mq750:gap-[50px_100px]">
      <section className="w-[1339px] flex flex-row items-start justify-start pt-0 px-[75px] pb-1.5 box-border max-w-full text-left text-[40px] text-[#292c2d] font-body-text-main lg:pl-[37px] lg:pr-[37px] lg:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full lg:gap-[32px_64px] mq750:gap-[16px_64px]">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-[24px] mq450:leading-[24px] mq1050:text-13xl mq1050:leading-[32px]">
              Memberships
            </h1>
          </div>
          <div className="w-[777px] flex flex-col items-start justify-start gap-[32px] max-w-full text-[20px] text-goldenrod mq450:gap-[16px_32px]">
            <div className="w-[222px] flex flex-row items-start justify-start gap-[16px]">
              <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="self-stretch relative leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
                  Our Memberships
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-base text-darkslategray">
              <div className="rounded-[72px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[3px] gap-[5px] border-[2px] border-solid border-goldenrod">
                <button
                  onClick={(e) => setMode("monthly")}
                  className={`${
                    mode === "monthly" && "bg-goldenrod text-white"
                  } cursor-pointer [border:none] py-[14.5px] px-[29.5px]  rounded-[55px] flex flex-row items-start justify-start `}
                >
                  <div
                    name="monthly"
                    onClick={(e) => setMode("monthly")}
                    className="cursor-pointer relative text-base leading-[100%] font-medium font-body-text-main text-left inline-block min-w-[65px]"
                  >
                    Monthly
                  </div>
                </button>
                <button
                  onClick={(e) => setMode("yearly")}
                  className={`${
                    mode === "yearly" && "bg-goldenrod text-white"
                  } flex flex-row items-start rounded-[55px] justify-start py-[14.5px] px-[36.5px]`}
                >
                  <div
                    name="yearly"
                    onClick={(e) => setMode("yearly")}
                    className="cursor-pointer relative leading-[100%] font-medium inline-block min-w-[51px]"
                  >
                    Yearly
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-13xl">
            <div className="w-[1088px] flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full lg:gap-[32px] mq750:gap-[16px]">
              <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-start pt-12 px-[34px] pb-9 box-border gap-[64px] min-w-[240px] mq450:gap-[32px_64px] mq750:pt-[31px] mq750:pb-[23px] mq750:box-border">
                <div className="self-stretch flex flex-row items-center justify-center py-0 px-9">
                  <div className="flex-1 flex flex-col items-center justify-center gap-[7px]">
                    <div className="flex flex-row items-start justify-start py-0 px-[34px]">
                      <h1 className="m-0 w-28 relative text-inherit leading-[36px] font-semibold font-inherit inline-block min-w-[112px] mq450:text-lgi mq450:leading-[22px] mq1050:text-7xl mq1050:leading-[29px]">
                        Starter
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center text-left text-45xl">
                      <b className="relative leading-[82px] uppercase whitespace-nowrap mq450:text-19xl mq450:leading-[43px] mq1050:text-32xl mq1050:leading-[57px]">
                        $6.99
                      </b>
                      <div className="flex flex-row items-center justify-center text-lg">
                        <div className="relative text-sm">Per month</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[216px] h-[266px] flex flex-row items-start justify-start pt-0 px-px pb-[74px] box-border text-left text-base text-gray-100">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Discount on Products
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px]">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/memberships/tick.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                          <div className="relative leading-[120%]">
                            Discount on Services
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/memberships/tick.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                          <div className="relative leading-[120%] inline-block min-w-[102px]">
                            Free Delivery
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/memberships/tick.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                          <div className="relative leading-[120%]">
                            24/7 Customer Service
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/checkout/starter"}
                  className="cursor-pointer [border:none] pt-4 px-20 pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod mq450:pl-5 mq450:pr-5 mq450:box-border"
                >
                  <div className="w-[92px] relative text-base font-medium font-body-text-main text-white text-center inline-block min-w-[92px]">
                    Get Started
                  </div>
                </Link>
              </div>
              <div className="flex-1 rounded-10xs bg-goldenrod shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-start pt-12 px-[34px] pb-9 box-border gap-[64px] min-w-[240px] mq450:gap-[32px_64px] mq750:pt-[31px] mq750:pb-[23px] mq750:box-border">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-9">
                      <h1 className="m-0 w-[146px] relative text-inherit leading-[36px] font-semibold font-inherit inline-block mq450:text-lgi mq450:leading-[22px] mq1050:text-7xl mq1050:leading-[29px]">
                        Advance
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center text-left text-45xl text-white">
                      <b className="relative leading-[72px] uppercase whitespace-nowrap mq450:text-19xl mq450:leading-[43px] mq1050:text-32xl mq1050:leading-[57px]">
                        $39.99
                      </b>
                      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[62px] pl-[62.5px] text-lg">
                        <div className="relative text-sm">Per month</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 flex flex-row items-start justify-start pt-0 px-px pb-[7px] box-border text-left text-base text-white">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Discount on Products
                        </div>
                      </div>
                    </div>
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Discount on Services
                        </div>
                      </div>
                    </div>
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%] inline-block min-w-[102px]">
                          Free Delivery
                        </div>
                      </div>
                    </div>
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%] inline-block min-w-[124px]">
                          Referral Partner
                        </div>
                      </div>
                    </div>
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Own Store Option
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick-white.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[134px]">
                        <div className="relative leading-[120%]">
                          Priority Customer Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/checkout/advance"}
                  className="cursor-pointer [border:none] pt-4 px-20 pb-[15px] bg-white rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border"
                >
                  <div className="w-[92px] relative text-base font-medium font-body-text-main text-darkslategray text-center inline-block min-w-[92px]">
                    Get Started
                  </div>
                </Link>
              </div>
              <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-start pt-12 px-[34px] pb-9 box-border gap-[64px] min-w-[240px] mq450:gap-[32px_64px] mq750:pt-[31px] mq750:pb-[23px] mq750:box-border">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[19px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                      <h1 className="m-0 w-[53px] relative text-inherit leading-[36px] font-semibold font-inherit inline-block min-w-[53px] mq450:text-lgi mq450:leading-[22px] mq1050:text-7xl mq1050:leading-[29px]">
                        Pro
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center text-left text-45xl">
                      <b className="relative leading-[72px] uppercase whitespace-nowrap mq450:text-19xl mq450:leading-[43px] mq1050:text-32xl mq1050:leading-[57px]">
                        $29.99
                      </b>
                      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[61px] text-lg">
                        <div className="relative text-sm">Per month</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[266px] flex flex-row items-start justify-start pt-0 px-px pb-[18px] box-border text-left text-base text-gray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Discount on Products
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Discount on Services
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%] inline-block min-w-[102px]">
                          Free Delivery
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          Own Store Option
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative rounded-16xl overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/memberships/tick.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative leading-[120%]">
                          24/7 Customer Service
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/checkout/pro"}
                  className="cursor-pointer [border:none] pt-4 px-20 pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod mq450:pl-5 mq450:pr-5 mq450:box-border"
                >
                  <div className="w-[92px] relative text-base font-medium font-body-text-main text-white text-center inline-block min-w-[92px]">
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Memberships;

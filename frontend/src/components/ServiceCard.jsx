import React from "react";
import { Link } from "react-router-dom";
import { useGetMyDetailsQuery } from "../redux/services/auth";

const ServiceCard = ({ type, title, image, details, _id }) => {
  const result = useGetMyDetailsQuery();
  return (
    <div className="w-[629px] !m-[0]  rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[35px] pr-0 pl-px box-border max-w-full">
      <button className="cursor-pointer [border:none] py-[15.5px] px-5 bg-goldenrod self-stretch flex flex-row items-start justify-center hover:bg-darkgoldenrod">
        <div className="relative text-xl leading-[24px] font-semibold font-title-16px-medium text-white text-left inline-block min-w-[100px] mq450:text-base mq450:leading-[19px]">
          {type}
        </div>
      </button>
      <div className="self-stretch h-[387px] flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
        <img
          className="h-[350px] flex-1 relative max-w-full overflow-hidden"
          alt=""
          src={image}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-4">
        <div className="w-[318px] flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
              {title}
            </div>
          </div>
          <div className="relative leading-[24px] font-medium text-[#7D7D7D]">
            {details}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-row items-start justify-center gap-[16px] max-w-full mq800:flex-wrap">
          {!result.data?.success && (
            <Link
              to={"/signup"}
              className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[59px] pl-[60px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod"
            >
              <div className="w-[61px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block min-w-[61px]">
                Sign up
              </div>
            </Link>
          )}
          <Link
            to={"/service/" + _id}
            className="cursor-pointer pt-4 px-[39px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100"
          >
            <div className="w-[99px] relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[99px]">
              More Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

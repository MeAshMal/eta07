import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, _id, price, oldPrice }) => {
  return (
    <Link
      to={"/product/" + _id}
      className="w-[380px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[20px] [debug_commit:2554057]"
    >
      <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row flex-wrap items-start justify-start pt-5 px-5 pb-[50px] gap-[16px]">
        <button className="cursor-pointer [border:none] py-1 px-2.5 bg-goldenrod rounded-10xs flex flex-row items-start justify-start hover:bg-darkgoldenrod">
          <div className="relative text-sm font-semibold font-title-16px-medium text-gray-400 text-left inline-block min-w-[39px]">
            -40%
          </div>
        </button>
        <div className="flex-1 flex flex-col items-start justify-start pt-[30px] pb-0 pr-[23px] pl-0 box-border min-w-[138px]">
          <div className="self-stretch h-[180px] relative overflow-hidden shrink-0">
            <img
              className="absolute w-[calc(100%_-_18px)] top-[calc(50%_-_76px)] right-[9px] left-[9px] max-w-full overflow-hidden h-[152px] object-cover"
              loading="lazy"
              alt={title}
              src={image}
            />
          </div>
        </div>
        <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
            alt=""
            src="/productcard/heart.png"
          />
          <img
            className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
            alt=""
            src="/productcard/Frame 1000006015.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5">
        <div className="flex flex-col items-start justify-start gap-[8px] text-gray">
          <div className="relative leading-[24px] font-medium">{title}</div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
            <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
              ${price}
            </div>
            <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-[#7D7D7D] inline-block min-w-[37px] whitespace-nowrap">
              {oldPrice && "$" + oldPrice}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-[#7D7D7D]">
            <div className="h-5 flex flex-row items-start justify-start">
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src="/productcard/Vector.svg"
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src="/productcard/Vector.svg"
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src="/productcard/Vector.svg"
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src="/productcard/Vector.svg"
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src="/productcard/Vector.svg"
              />
            </div>
            <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
              (88)
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

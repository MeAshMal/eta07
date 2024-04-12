import { useGetMyDetailsQuery } from "../../redux/services/auth";

const Header = () => {
  const result = useGetMyDetailsQuery();
  return (
    <header className="self-stretch h-20 bg-white overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[11px] pb-4 pr-14 pl-8 box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-5xl text-darkslategray-100 font-poppins mq750:pr-7 mq750:box-border">
      <div className="self-stretch w-[117.8px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <img
          className="self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] pb-0 pr-[33.8px] pl-0">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap">{`Dashboard `}</h3>
      </div>
      <div className="self-stretch w-[444.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-base text-darkslategray-200">
        <div className="w-[380px] flex-1 rounded-14xl bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-px pb-0.5 pr-3 pl-[25px] box-border max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[57px]">
              Search
            </div>
          </div>
          <img
            className="h-[20px] my-auto invert w-[20px] relative overflow-hidden shrink-0"
            alt=""
            src="/header/searchIcon.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-3xs text-white">
        <div className="h-[17px] w-full flex flex-row ">
          <img
            className="h-12 w-[40%] !m-[0] bottom-[-36px] left-[-34px] rounded-43xl overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/header/notification.png"
          />
          <div className="max-w-[30px] h-[30px] items-center p-auto justify-center  text-sm rounded-full flex-1 bg-red box-border flex flex-row  z-[1] border-[2px] border-solid border-white">
            <div>2</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-base text-darkslategray-100">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-12 w-12 relative rounded-18xl overflow-hidden shrink-0 object-cover min-h-[48px]"
              loading="lazy"
              alt=""
              src="/header/profileIcon.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative inline-block min-w-[88px] whitespace-nowrap">
                  {result.data?.user.name}
                </div>
                <div className="relative text-xs text-gray-100 inline-block min-w-[36px]">
                  Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserReferral = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1050:pl-5 mq1050:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1050:hidden">
          <SideBar />
        </div>
        <header className="flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-col items-start justify-start pt-[54.5px] pb-[636.5px] pr-[25px] pl-[45px] box-border gap-[32px] max-w-[calc(100%_-_250px)] text-left text-5xl text-darkslategray-100 font-poppins lg:pl-[22px] lg:box-border mq1050:pt-[35px] mq1050:pb-[414px] mq1050:box-border mq1050:max-w-full mq750:gap-[16px_32px] mq750:pt-[23px] mq750:pb-[269px] mq750:box-border">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[96px] mq450:text-lgi">
            Referral
          </h3>
          <div className="self-stretch bg-white flex flex-col items-start justify-start p-[31px] box-border gap-[31.5px] max-w-full mq750:gap-[16px_31.5px]">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
              Referral Link
            </h3>
            <div className="w-[518px] flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-base">
              <div className="flex-1 rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-[15.5px] pb-[15px] pr-[26px] pl-6 box-border min-w-[122px] gap-[20px]">
                <div className="relative inline-block min-w-[98px]">
                  ETA07BOB25
                </div>
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/vuesaxlinearcopy.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] pt-4 px-[50px] pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                <div className="w-[82px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[82px]">
                  Share Link
                </div>
              </button>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default AdvanceUserReferral;

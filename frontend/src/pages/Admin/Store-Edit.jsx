import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserStoreEdit = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1050:pl-5 mq1050:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1050:hidden">
          <SideBar />
        </div>
        <section className="flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-col items-start justify-start pt-[45px] pb-0 pr-[25px] pl-[45px] box-border gap-[38px] max-w-[calc(100%_-_250px)] text-left text-5xl text-darkslategray-100 font-poppins lg:pl-[22px] lg:box-border mq750:gap-[19px_38px] mq750:pt-5 mq750:box-border mq1050:pt-[29px] mq1050:box-border mq1050:max-w-full">
          <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-5xl text-darkslategray-100 font-poppins mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[106px] mq450:text-lgi">
                My Store
              </h3>
            </div>
            <button className="cursor-pointer pt-4 pb-[15px] pr-[45px] pl-[46px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
              <div className="w-[101px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[101px]">
                Create Store
              </div>
            </button>
          </header>
          <div className="self-stretch h-[806px] flex flex-col items-start justify-start pt-0 px-0 pb-[462px] box-border gap-[32px] max-w-full mq750:gap-[16px_32px] mq750:pb-[195px] mq750:box-border mq1050:h-auto mq1050:pb-[300px] mq1050:box-border">
            <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start pt-[31px] px-[31px] pb-[55px] box-border gap-[16px] shrink-0 [debug_commit:f6aba90] max-w-full">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                Store Information
              </h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[55px] box-border max-w-full text-base mq1050:pl-[27px] mq1050:pr-[27px] mq1050:box-border">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full mq1050:gap-[32px] mq450:gap-[16px]">
                  <div className="h-[194px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[7px] pl-[7.5px]">
                        <img
                          className="h-[150px] w-[150px] relative rounded-[118px] overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/frame-1000006088.svg"
                        />
                      </div>
                      <div className="relative">Upload Store Banner</div>
                    </div>
                  </div>
                  <div className="h-[206px] flex-1 flex flex-row flex-wrap items-start justify-start relative gap-[32px] min-w-[455px] max-w-full mq750:min-w-full">
                    <div className="w-80 !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative inline-block min-w-[95px]">
                        Store Name
                      </div>
                      <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-linen">
                        <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                          Enter Your Store Name
                        </div>
                      </button>
                    </div>
                    <div className="w-80 !m-[0] absolute top-[0px] left-[352px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative inline-block min-w-[76px]">
                        Catagory
                      </div>
                      <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] whitespace-nowrap">
                        <div className="relative">Select Store Catagory</div>
                      </div>
                    </div>
                    <div className="w-80 !m-[0] absolute top-[119px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative inline-block min-w-[44px]">
                        Email
                      </div>
                      <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-linen">
                        <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                          Enter Email Address
                        </div>
                      </button>
                    </div>
                    <div className="w-80 !m-[0] absolute top-[119px] left-[352px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative inline-block min-w-[53px]">
                        Mobile
                      </div>
                      <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-linen">
                        <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                          Enter Mobile Number
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[31px] px-[31px] pb-[140px] gap-[133px] shrink-0 [debug_commit:f6aba90] lg:gap-[66px_133px] mq750:gap-[33px_133px] mq450:gap-[17px_133px] mq450:pt-5 mq450:pb-[91px] mq450:box-border">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                Store Listings
              </h3>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px text-center text-base">
                <div className="w-[295px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch h-12 flex flex-row items-start justify-center py-0 px-5 box-border">
                    <img
                      className="h-12 w-12 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/materialsymbolsadd.svg"
                    />
                  </div>
                  <div className="self-stretch relative leading-[18px] font-medium">
                    <p className="m-0">No products/service listed yet.</p>
                    <p className="m-0">Add some to get started!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AdvanceUserStoreEdit;

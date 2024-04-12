import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserWishlist = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1050:pl-5 mq1050:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1050:hidden">
          <SideBar />
        </div>
        <section className="h-[944px] flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-y-auto flex flex-col items-center justify-start pt-[45px] pb-[844px] pr-5 pl-10 box-border gap-[32px] max-w-[calc(100%_-_250px)] text-left text-5xl text-darkslategray-100 font-poppins lg:pt-[29px] lg:pb-[549px] lg:box-border mq1050:pt-5 mq1050:pb-[357px] mq1050:box-border mq1050:max-w-full mq450:h-auto mq450:pb-[232px] mq450:box-border mq750:gap-[16px_32px]">
          <div className="w-[982px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[128px] mq450:text-[19px]">
                7 Products
              </h1>
            </div>
            <button className="cursor-pointer pt-4 pb-[15px] pr-[33px] pl-[34px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
              <div className="w-[126px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[126px]">
                Move All to Cart
              </div>
            </button>
          </div>
          <div className="w-[982px] h-[1076.5px] shrink-0 flex flex-row flex-wrap items-start justify-start relative gap-[32px_30px] [debug_commit:f6aba90] text-xs text-black mq450:h-auto mq450:min-h-[1076.5]">
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[0px] left-[0px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-[15px] pb-[30.7px] pr-[15px] pl-[76.5px] gap-[34.5px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-[15.8px] px-0 pb-0">
                  <img
                    className="w-[153px] h-[148.5px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-1000006016.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-1000005979.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/product-categories.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-3.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/mdishare.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[0px] left-[338px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[33.7px] pr-[15px] pl-[108px] gap-[20px]">
                <div className="self-stretch w-[90.8px] flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/71rdoexxtrl-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-1.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-5.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-6.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-7.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-8.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-9.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[0px] left-[676px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[38.2px] pr-[15px] pl-[81px] gap-[20px]">
                <div className="self-stretch w-36 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-2.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-10.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-11.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[369.5px] left-[0px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[28.4px] pr-[15px] pl-[84.8px] gap-[20px]">
                <div className="self-stretch w-[136.5px] flex flex-col items-start justify-start pt-[14.3px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/eos250d03500x500-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-3.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-16.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-18.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-19.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[369.5px] left-[338px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[38.2px] pr-[15px] pl-[81px] gap-[20px]">
                <div className="self-stretch w-36 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-4.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-4.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-20.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-22.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-23.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-24.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[306px] !m-[0] absolute top-[369.5px] left-[676px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-[15px] pb-[37.5px] pr-[15px] pl-[76.5px] gap-[34.5px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border min-w-[99px]">
                  <img
                    className="self-stretch h-[135px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/copa-sense-1@2x.png"
                  />
                </div>
                <div className="h-[66px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-5.svg"
                  />
                  <img
                    className="w-[27px] h-[27px] relative rounded-[20.25px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-5.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-mini leading-[18px] font-medium">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="relative leading-[18px] font-medium inline-block min-w-[27px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[18px] font-medium text-gray inline-block min-w-[28px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-25.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-26.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-27.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-28.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-29.svg"
                        />
                      </div>
                      <div className="relative leading-[15.75px] font-semibold inline-block min-w-[24px]">
                        (88)
                      </div>
                    </div>
                    <div className="relative leading-[18px] font-semibold text-darkslategray-100 inline-block min-w-[82px]">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[337.5px] w-[306px] !m-[0] absolute top-[739px] left-[0px] rounded-[2.25px] bg-white shadow-[0px_4.5px_11.25px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] box-border gap-[18px]">
              <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-[15px] pb-[32.2px] pr-[15px] pl-[83.3px] gap-[20px]">
                <div className="self-stretch w-[139.5px] flex flex-col items-start justify-start pt-[17.3px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/ideapadgaming3i01500x500-1@2x.png"
                  />
                </div>
                <div className="h-[58px] w-[27px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[20.25px] w-[27px] h-[27px] overflow-hidden"
                    alt=""
                    src="/frame-1000006016-6.svg"
                  />
                  <img
                    className="absolute top-[39px] left-[0px] rounded-[20.25px] w-[27px] h-[27px] overflow-hidden"
                    alt=""
                    src="/frame-1000005979-6.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="self-stretch w-[152px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch h-[18px] relative text-mini leading-[18px] font-medium inline-block">
                      Quilted Satin Jacket
                    </div>
                    <div className="w-[67px] flex-1 flex flex-row items-start justify-start gap-[12px] text-goldenrod">
                      <div className="self-stretch flex-1 relative leading-[18px] font-medium whitespace-nowrap">
                        $120
                      </div>
                      <div className="self-stretch flex-1 relative [text-decoration:line-through] leading-[18px] font-medium text-gray whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[6px] text-2xs-5 text-gray">
                      <div className="h-[15px] flex flex-row items-start justify-start">
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-30.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-31.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-32.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-33.svg"
                        />
                        <img
                          className="h-[15px] w-[15px] relative rounded-[1.05px] min-h-[15px]"
                          alt=""
                          src="/vector-34.svg"
                        />
                      </div>
                      <div className="self-stretch w-6 relative leading-[15.75px] font-semibold inline-block shrink-0">
                        (88)
                      </div>
                    </div>
                    <div className="w-[82px] h-[18px] relative leading-[18px] font-semibold text-darkslategray-100 inline-block">
                      Seller : BOB25
                    </div>
                  </div>
                  <img
                    className="h-[27px] w-[27px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AdvanceUserWishlist;

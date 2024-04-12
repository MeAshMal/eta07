import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserOrder = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq975:pl-5 mq975:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq975:hidden">
          <SideBar page="order" />
        </div>
        <section className="flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-col items-start justify-start pt-[49px] pb-[65px] pr-[31px] pl-8 box-border gap-[32px] max-w-[calc(100%_-_250px)] text-left text-8xl text-darkslategray-100 font-poppins mq700:gap-[16px_32px] mq700:pt-[21px] mq700:pb-[27px] mq700:box-border mq975:pt-8 mq975:pb-[42px] mq975:box-border mq975:max-w-full">
          <div className="self-stretch rounded-3xs flex flex-row items-start justify-center gap-[33px] mq700:gap-[33px_16px] mq975:flex-wrap">
            <div className="flex-[0.8559] rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-[75.5px] box-border min-w-[117px] max-w-[252px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="h-[108px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/shape.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <div className="relative font-semibold inline-block min-w-[34px] mq450:text-3xl">
                      30
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-px text-base">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative inline-block min-w-[98px]">
                      Total Orders
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-2.5 text-xs text-darkslategray-300">
                      <div className="relative inline-block min-w-[78px]">
                        $239K Spend
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9576] rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-[69.5px] box-border min-w-[117px] max-w-[252px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="h-[108px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[7px]">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/shape-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[32px] mq450:text-3xl">
                        22
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-base">
                  <div className="relative inline-block min-w-[112px]">
                    Product Order
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[10.5px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[91px]">
                      45% From Total
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9237] rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-[71.5px] box-border min-w-[117px] max-w-[252px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="h-[108px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-3">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/shape-2.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[18px] mq450:text-3xl">
                        8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-base">
                  <div className="relative inline-block min-w-[108px]">
                    Service Order
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[8.5px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[91px]">
                      55% From Total
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-[67px] box-border min-w-[117px] max-w-[252px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[108px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[9px]">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/shape-3.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="relative font-semibold inline-block min-w-[33px] mq450:text-3xl">
                        02
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-base">
                  <div className="relative inline-block min-w-[117px]">
                    Coupons Used
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[17px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[83px]">
                      $100K+ Saved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-xl">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full mq700:gap-[16px]">
              <div className="flex-1 rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[23px] px-[25px] box-border gap-[16px] min-w-[311px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[121px] mq450:text-base">
                    Total Spend
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-xs text-goldenrod">
                    <div className="relative [text-decoration:underline] font-medium inline-block min-w-[65px]">
                      View more
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-base mq450:gap-[16px_32px]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-[39px] flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-9 w-9 relative rounded-9xl overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-medium">
                          Product Payment
                        </div>
                        <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[71px]">
                          #4085094807
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-[39px] flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-9 w-9 relative rounded-9xl overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-medium">
                          Service Payment
                        </div>
                        <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[77px]">
                          #34004560936
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-[39px] flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-9 w-9 relative rounded-9xl overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-medium">
                          Membership Charge
                        </div>
                        <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[71px]">
                          #4085094807
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[273px] w-[282px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[23px] px-[25px] pb-8 box-border gap-[16px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                  Product Returns
                </h3>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-sm">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover min-h-[36px]"
                      loading="lazy"
                      alt=""
                      src="/frame-1000006103@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-9 w-9 relative rounded-10xs bg-whitesmoke overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_8px)] w-[17px] h-[26px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/71rdoexxtrl-1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-9 w-9 relative rounded-10xs bg-whitesmoke overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[30px]" />
                      <img
                        className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_13px)] w-[26px] h-7 object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/eos250d03500x500-1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[273px] w-[282px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[23px] px-[25px] pb-8 box-border gap-[16px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                  Cancallation
                </h3>
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-sm">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover min-h-[36px]"
                      loading="lazy"
                      alt=""
                      src="/frame-1000006103-1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-9 w-9 relative rounded-10xs bg-whitesmoke overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_8px)] w-[17px] h-[26px] object-cover"
                        alt=""
                        src="/71rdoexxtrl-1-1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-9 w-9 relative rounded-10xs bg-whitesmoke overflow-hidden shrink-0">
                      <img
                        className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_13px)] w-[26px] h-7 object-cover"
                        loading="lazy"
                        alt=""
                        src="/eos250d03500x500-1-1@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Quilted Satin Jacket</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] opacity-[0.5] text-3xs">
                        <div className="relative inline-block min-w-[60px]">
                          <span className="font-semibold">Quantity:</span>
                          <span> 01</span>
                        </div>
                        <div className="relative inline-block min-w-[58px]">
                          <span className="font-semibold">Price :</span>
                          <span> $340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[32px] max-w-full text-sm mq700:gap-[32px_16px] mq975:flex-wrap">
              <div className="flex-1 rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[23px] px-[25px] pb-[13px] box-border gap-[16px] min-w-[515px] max-w-full mq700:min-w-full">
                <h3 className="m-0 relative text-xl font-semibold font-inherit mq450:text-base">
                  Order History
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[59px] max-w-full mq975:flex-wrap mq975:gap-[59px_29px]">
                    <div className="w-[187px] flex flex-col items-start justify-start">
                      <div className="relative font-semibold inline-block min-w-[56px]">
                        Product
                      </div>
                    </div>
                    <div className="relative font-semibold inline-block min-w-[63px]">
                      Quantity
                    </div>
                    <div className="w-[361px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start py-0 pr-3.5 pl-0">
                        <div className="relative font-semibold inline-block min-w-[36px]">
                          Price
                        </div>
                      </div>
                      <div className="relative font-semibold inline-block min-w-[78px]">
                        Order Date
                      </div>
                      <div className="relative font-semibold inline-block min-w-[95px]">
                        Delivery Date
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq975:gap-[16px_32px]">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq700:flex-wrap">
                      <div className="h-9 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/frame-1000006103-2@2x.png"
                        />
                        <div className="relative">Quilted Satin Jacke...</div>
                      </div>
                      <div className="relative inline-block min-w-[14px]">
                        01
                      </div>
                      <div className="relative inline-block min-w-[35px] whitespace-nowrap">
                        $340
                      </div>
                      <div className="relative inline-block min-w-[82px]">
                        30/04/2023
                      </div>
                      <div className="relative inline-block min-w-[77px]">
                        12/05/2023
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq700:flex-wrap">
                      <div className="h-9 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/frame-1000006103-3@2x.png"
                        />
                        <div className="relative">Quilted Satin Jacke...</div>
                      </div>
                      <div className="relative inline-block min-w-[14px]">
                        01
                      </div>
                      <div className="relative inline-block min-w-[35px] whitespace-nowrap">
                        $340
                      </div>
                      <div className="relative inline-block min-w-[82px]">
                        30/04/2023
                      </div>
                      <div className="relative inline-block min-w-[77px]">
                        12/05/2023
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq700:flex-wrap">
                      <div className="h-9 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/frame-1000006103-4@2x.png"
                        />
                        <div className="relative">Quilted Satin Jacke...</div>
                      </div>
                      <div className="relative inline-block min-w-[14px]">
                        01
                      </div>
                      <div className="relative inline-block min-w-[35px] whitespace-nowrap">
                        $340
                      </div>
                      <div className="relative inline-block min-w-[82px]">
                        30/04/2023
                      </div>
                      <div className="relative inline-block min-w-[77px]">
                        12/05/2023
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq700:flex-wrap">
                      <div className="h-9 flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="h-9 w-9 relative rounded-10xs overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/frame-1000006103-5@2x.png"
                        />
                        <div className="relative">Quilted Satin Jacke...</div>
                      </div>
                      <div className="relative inline-block min-w-[14px]">
                        01
                      </div>
                      <div className="relative inline-block min-w-[35px] whitespace-nowrap">
                        $340
                      </div>
                      <div className="relative inline-block min-w-[82px]">
                        30/04/2023
                      </div>
                      <div className="relative inline-block min-w-[77px]">
                        12/05/2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[282px] rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[23px] px-[25px] pb-6 box-border gap-[32px] min-w-[282px] text-xl mq450:gap-[16px_32px] mq450:pt-5 mq450:pb-5 mq450:box-border mq975:flex-1">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-base">
                  Product vs Service
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px] text-center text-[25px] text-goldenrod">
                  <div className="h-[170px] flex-1 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[190px] h-[190px] border-[0px] border-solid border-goldenrod" />
                    <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start py-[57px] pr-[47.5px] pl-[48.5px] box-border h-full">
                      <div className="w-[calc(100%_+_20px)] h-[calc(100%_+_20px)] absolute !m-[0] top-[0px] right-[-20px] bottom-[-20px] left-[0px] rounded-[50%] box-border z-[1] border-[0px] border-solid border-darkslategray-100" />
                      <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                        <div className="w-10 relative font-semibold inline-block min-w-[40px] z-[2] mq450:text-xl">
                          152
                        </div>
                      </div>
                      <div className="self-stretch relative text-xs text-darkslategray-100 inline-block min-w-[74px] z-[2]">
                        Total Orders
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[60px] pl-[61px]">
                  <div className="flex flex-row items-start justify-start gap-[24px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[12.5px]">
                        <div className="relative font-medium inline-block min-w-[20px] mq450:text-base">
                          19
                        </div>
                      </div>
                      <div className="relative text-xs text-darkslategray-300 inline-block min-w-[45px]">
                        Present
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start text-goldenrod">
                      <div className="flex flex-row items-start justify-start py-0 px-2">
                        <div className="relative font-medium inline-block min-w-[26px] mq450:text-base">
                          08
                        </div>
                      </div>
                      <div className="relative text-xs text-darkslategray-300 inline-block min-w-[42px]">
                        Absent
                      </div>
                    </div>
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
export default AdvanceUserOrder;

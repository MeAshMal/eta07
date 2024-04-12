import { useState } from "react";
import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserStoreProductList = () => {
  const [frameIconChecked, setFrameIconChecked] = useState(true);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1050:pl-5 mq1050:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1050:hidden">
          <SideBar />
        </div>
        <section className="flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-col items-start justify-start pt-[45px] px-[35px] pb-[81px] box-border gap-[38px] max-w-[calc(100%_-_250px)] text-left text-[20px] text-darkslategray-100 font-poppins lg:pt-[29px] lg:pb-[53px] lg:box-border mq750:gap-[19px_38px] mq750:pt-5 mq750:pb-[34px] mq750:box-border mq1050:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <div className="w-[226px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="h-[29px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <img
                    className="w-7 h-7 relative rounded-10xs overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/iconamoonarrowup2light@2x.png"
                  />
                </div>
                <div className="relative font-semibold mq450:text-base">
                  Back to Store Page
                </div>
              </div>
            </div>
            <button className="cursor-pointer pt-4 pb-[15px] pr-[39px] pl-10 bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
              <div className="w-[84px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[84px]">
                View Store
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[26px] box-border gap-[22px] max-w-full text-base">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[347px] max-w-full mq750:gap-[16px_32px] mq750:min-w-full">
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start pt-8 px-[31px] pb-[30px] box-border gap-[16px] max-w-full mq450:pt-[21px] mq450:pb-5 mq450:box-border">
                  <h3 className="m-0 h-9 relative text-5xl font-semibold font-inherit inline-block mq450:text-lgi">
                    Basic Information
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[115px]">
                        Product Name
                      </div>
                      <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] whitespace-nowrap">
                        <div className="relative inline-block min-w-[115px]">
                          Product Name
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative">Product Description</div>
                      <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start py-12 px-6 whitespace-nowrap">
                        <div className="relative">Product Description</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[306px] rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-[31px] box-border gap-[16px] max-w-full">
                  <h3 className="m-0 relative text-5xl font-semibold font-inherit inline-block min-w-[115px] mq450:text-lgi">
                    Category
                  </h3>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative">Product Category</div>
                      <div className="self-stretch flex-1 rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-3.5 pr-[21px] pl-6 gap-[20px]">
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <div className="relative inline-block min-w-[65px]">
                            Gaming
                          </div>
                        </div>
                        <img
                          className="h-7 w-7 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[28px]"
                          alt=""
                          src="/iconamoonarrowup2light-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[87px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative">Product Sub Category</div>
                      <div className="self-stretch flex-1 rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-3.5 pr-[21px] pl-6 gap-[20px]">
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <div className="relative inline-block min-w-[96px]">
                            Accessories
                          </div>
                        </div>
                        <img
                          className="h-7 w-7 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[28px]"
                          alt=""
                          src="/iconamoonarrowup2light-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-[31px] box-border gap-[16px] max-w-full text-5xl">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[92px] mq450:text-lgi">
                    Variant
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                      <div className="relative inline-block min-w-[125px]">
                        Product Variant
                      </div>
                      <div className="relative font-semibold text-goldenrod">
                        + Add Product Variant
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[347px] max-w-full text-5xl mq750:gap-[16px_32px] mq750:min-w-full">
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-4 gap-[16px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                    <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                      Product Image
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-3xs mq750:flex-wrap">
                    <div className="flex-[0.4524] rounded-10xs box-border flex flex-col items-start justify-start pt-10 px-[45px] pb-[39px] gap-[16px] min-w-[109px] border-[1px] border-dashed border-black mq450:flex-1">
                      <div className="h-7 flex flex-row items-start justify-start py-0 px-6 box-border">
                        <img
                          className="h-7 w-7 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/uilimageupload.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative [text-decoration:underline] font-medium text-goldenrod inline-block min-w-[76px]">
                          Click to upload
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-8">
                          <div className="relative inline-block min-w-[12px]">
                            Or
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.5px]">
                          <div className="relative inline-block min-w-[73px]">
                            drag and drop
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[168px] flex-1 relative rounded-10xs bg-whitesmoke overflow-hidden min-w-[109px]">
                      <img
                        className="absolute top-[calc(50%_-_41px)] left-[calc(50%_-_58px)] w-[116px] h-[83px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-63@2x.png"
                      />
                    </div>
                    <div className="w-[134px] flex flex-col items-start justify-start gap-[16px]">
                      <button className="cursor-pointer [border:none] p-0 bg-whitesmoke self-stretch h-[76px] relative rounded-10xs overflow-hidden shrink-0">
                        <img
                          className="absolute h-[calc(100%_-_24px)] top-[12px] bottom-[12px] left-[calc(50%_-_27px)] max-h-full w-[55px] object-contain"
                          alt=""
                          src="/image-57@2x.png"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-whitesmoke self-stretch h-[76px] relative rounded-10xs overflow-hidden shrink-0">
                        <img
                          className="absolute h-[calc(100%_-_20px)] top-[10px] bottom-[10px] left-[calc(50%_-_40px)] max-h-full w-20 object-cover"
                          alt=""
                          src="/image-61@2x.png"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-[31px] box-border gap-[16px] max-w-full text-base">
                  <h3 className="m-0 relative text-5xl font-semibold font-inherit mq450:text-lgi">{`Shipping & Delivery`}</h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative inline-block min-w-[123px]">
                        Product Weight
                      </div>
                      <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-3.5 pr-[21px] pl-6 gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <div className="relative inline-block min-w-[38px]">
                            12.00
                          </div>
                        </div>
                        <div className="h-7 flex flex-row items-start justify-start gap-[5px]">
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <div className="relative inline-block min-w-[23px]">
                              KG
                            </div>
                          </div>
                          <img
                            className="h-7 w-7 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[28px]"
                            alt=""
                            src="/iconamoonarrowup2light-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="relative font-medium inline-block min-w-[99px]">
                        Product Size
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[112px]">
                          <div className="relative inline-block min-w-[54px]">
                            Length
                          </div>
                          <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-4 pb-[15px] pr-[27px] pl-6 gap-[20px]">
                            <div className="relative inline-block min-w-[38px]">
                              12.00
                            </div>
                            <div className="relative inline-block min-w-[16px]">
                              IN
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[112px]">
                          <div className="relative inline-block min-w-[64px]">
                            Breadth
                          </div>
                          <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-4 pb-[15px] pr-[27px] pl-6 gap-[20px]">
                            <div className="relative inline-block min-w-[38px]">
                              12.00
                            </div>
                            <div className="relative inline-block min-w-[16px]">
                              IN
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[112px]">
                          <div className="relative inline-block min-w-[47px]">
                            Width
                          </div>
                          <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-between pt-4 pb-[15px] pr-[27px] pl-6 gap-[20px]">
                            <div className="relative inline-block min-w-[38px]">
                              12.00
                            </div>
                            <div className="relative inline-block min-w-[16px]">
                              IN
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-[31px] box-border gap-[16px] max-w-full">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[85px] mq450:text-lgi">
                    Pricing
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq750:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[149px]">
                        <div className="relative inline-block min-w-[39px]">
                          Price
                        </div>
                        <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-linen">
                          <div className="relative text-base font-poppins text-darkslategray-100 text-left inline-block min-w-[63px]">
                            $ 180.00
                          </div>
                        </button>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[149px]">
                        <div className="relative">Compare at Price</div>
                        <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] whitespace-nowrap">
                          <div className="relative inline-block min-w-[67px]">
                            $ 320.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[29px] max-w-full text-5xl">
              <div className="flex-1 rounded-3xs bg-white flex flex-col items-start justify-start py-8 px-[31px] box-border gap-[16px] min-w-[347px] max-w-full mq750:min-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[117px] mq450:text-lgi">
                  Inventory
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-base">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq750:flex-wrap">
                    <div className="w-[150px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="relative inline-block min-w-[69px]">
                        Quantity
                      </div>
                      <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px]">
                        <div className="relative inline-block min-w-[36px]">
                          1400
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[201px]">
                      <div className="relative inline-block min-w-[115px]">
                        SKU (optional)
                      </div>
                      <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-linen">
                        <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                          JFD DFKJFG GLJK
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-3xs bg-white flex flex-col items-start justify-start pt-8 px-[31px] pb-[45px] box-border gap-[16px] min-w-[347px] max-w-full text-base mq750:min-w-full">
                <h3 className="m-0 relative text-5xl font-semibold font-inherit mq450:text-lgi">
                  Product Type
                </h3>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[19px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <input
                      className="accent-goldenrod m-0 w-3.5 h-3.5 relative rounded-10xs overflow-hidden shrink-0"
                      checked={frameIconChecked}
                      type="checkbox"
                      onChange={(event) =>
                        setFrameIconChecked(event.target.checked)
                      }
                    />
                  </div>
                  <div className="relative inline-block min-w-[35px]">New</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <input className="m-0 h-[19px] w-3.5" type="checkbox" />
                  <div className="relative inline-block min-w-[40px]">Used</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
              <button className="cursor-pointer pt-4 px-[58px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <div className="w-[61px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[61px]">
                  Discard
                </div>
              </button>
              <button className="cursor-pointer [border:none] pt-4 px-10 pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                <div className="w-[100px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[100px]">
                  Add Product
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AdvanceUserStoreProductList;

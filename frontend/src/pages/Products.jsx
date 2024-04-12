import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/services/product";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const result = useGetProductsQuery();
  useEffect(() => {
    console.log({ result });
    setProducts(result.data?.products);
  }, [result]);
  console.log({ products });
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[38.5px] tracking-[normal] mq750:gap-[19px_38.5px]">
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[61px] box-border max-w-full"></div>
      <main className="mb-4 h-fit flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <section className="flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-[40px] text-darkslategray-100 font-title-14px-semibold mq750:gap-[16px_32px]">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
            <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-[24px] mq450:leading-[24px] mq1025:text-[32px] mq1025:leading-[32px]">
              Explore Our Products
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[32px] max-w-full text-xl text-goldenrod mq450:flex-wrap mq450:gap-[32px_16px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
                  New Products
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] text-darkslategray">
              <div className="h-10 w-6 relative rounded-10xs bg-darkslategray-200" />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
                  Used Products
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-[100vw] h-screen  overflow-x-auto flex flex-row flex-wrap items-start justify-start relative gap-[48px_31px] max-w-full text-base mq450:h-auto mq450:min-h-[2064]">
            <div className="w-[408px] !m-[0] absolute top-[0px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-5 pb-[41px] pr-5 pl-[102px] gap-[46px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[133px]">
                  <img
                    className="self-stretch h-[198px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-1000006016.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-3.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/mdishare.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[0px] left-[441px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[45px] pr-5 pl-36 gap-[20px]">
                <div className="h-[215px] w-[121px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/71rdoexxtrl-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-1.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-5.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-6.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-7.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-8.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-9.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-1.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[0px] left-[882px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[51px] pr-5 pl-[108px] gap-[20px]">
                <div className="h-[209px] w-48 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-2.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-10.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-11.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-2.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[528px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[38px] pr-5 pl-[113px] gap-[20px]">
                <div className="h-[222px] w-[182px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/eos250d03500x500-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-3.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-4.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-16.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-17.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-18.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-19.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-3.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[528px] left-[441px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[51px] pr-5 pl-[108px] gap-[20px]">
                <div className="h-[209px] w-48 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1-1@2x.png"
                  />
                </div>
                <div className="h-[140px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-1000006015.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-4.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-5.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-20.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-22.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-23.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-24.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-4.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[528px] left-[882px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[43px] pr-5 pl-[111px] gap-[20px]">
                <div className="h-[217px] w-[186px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/ideapadgaming3i01500x500-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-5.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-6.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-25.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-26.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-27.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-28.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-29.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-5.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[1056px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-5 pb-[50px] pr-5 pl-[102px] gap-[46px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[133px]">
                  <img
                    className="self-stretch h-[180px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/copa-sense-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-6.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-7.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-30.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-31.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-32.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-33.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-34.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-6.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-6.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[1056px] left-[441px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[38px] pr-5 pl-[113px] gap-[20px]">
                <div className="h-[222px] w-[182px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/eos250d03500x500-1-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-7.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-8.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-35.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-36.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-37.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-38.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-39.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-7.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-7.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[1056px] left-[882px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-5 pb-[41px] pr-5 pl-[102px] gap-[46px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border min-w-[133px]">
                  <img
                    className="self-stretch h-[198px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/698717-z8a1x-3475-001-100-0000-lightreversiblequiltedsatinjacket-1-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-8.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-9.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-40.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-41.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-42.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-43.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-44.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-8.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-8.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[1584px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[51px] pr-5 pl-[108px] gap-[20px]">
                <div className="h-[209px] w-48 flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/curologyj7pkvqrtusmunsplash-1-2@2x.png"
                  />
                </div>
                <div className="h-[140px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006015-1.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-9.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-10.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-45.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-46.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-47.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-48.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-49.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-9.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-9.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[408px] !m-[0] absolute top-[1584px] left-[441px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[24px] max-w-full">
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-between pt-5 pb-[43px] pr-5 pl-[111px] gap-[20px]">
                <div className="h-[217px] w-[186px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/ideapadgaming3i01500x500-1-1@2x.png"
                  />
                </div>
                <div className="h-[88px] flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000006016-10.svg"
                  />
                  <img
                    className="w-9 h-9 relative rounded-8xl overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000005979-11.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <div className="h-[148px] flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative text-xl leading-[24px] font-medium text-black mq450:text-base mq450:leading-[19px]">
                      Quilted Satin Jacket
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[16px] text-goldenrod">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
                        $120
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-100 inline-block min-w-[37px] whitespace-nowrap">
                        $160
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-100">
                      <div className="h-5 flex flex-row items-start justify-start">
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-50.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-51.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-52.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-53.svg"
                        />
                        <img
                          className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                          alt=""
                          src="/vector-54.svg"
                        />
                      </div>
                      <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                        (88)
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[110px]">
                        Seller : BOB25
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/streamlinestore1solid-10.svg"
                      />
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium">
                      Estimated Delivery Date : 22/02/24
                    </div>
                  </div>
                  <img
                    className="h-9 w-9 relative overflow-hidden shrink-0"
                    alt=""
                    src="/mdishare-10.svg"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="self-stretch  flex flex-row flex-wrap items-start justify-start relative gap-[48px_31px] max-w-full text-base text-darkslategray-100 mq450:h-auto mq450:min-h-[1008]">
            {products && products?.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  _id={product._id}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.file[0].url}
                  key={product._id}
                />
              ))
            ) : (
              <div>Products not found</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopProducts;

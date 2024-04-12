import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[49px] tracking-[normal] mq800:gap-[24px_49px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[140px] box-border max-w-full text-left text-[64px] text-darkslategray-100 font-title-16px-medium mq800:pl-[37px] mq800:pr-[37px] mq800:pb-[91px] mq800:box-border">
        <div className="flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1350:flex-wrap">
          <div className="w-[664px] flex flex-col items-start justify-start pt-[98.5px] px-0 pb-0 box-border min-w-[664px] max-w-full mq450:pt-16 mq450:box-border mq1150:min-w-full mq1350:flex-1">
            <div className="w-[682px] flex flex-col items-start justify-start gap-[32px] shrink-0 [debug_commit:2554057] max-w-[103%] mq800:gap-[16px_32px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[100%] font-bold font-inherit mq450:text-[38px] mq450:leading-[38px] mq800:text-[51px] mq800:leading-[51px]">
                <span>{`Discover the Future of `}</span>
                <span className="text-goldenrod">{`Online Shopping & Services`}</span>
              </h1>
              <div className="relative text-base leading-[134.5%] text-gray-300 inline-block max-w-full">
                <p className="m-0">{`Your Gateway to Exclusive Deals, Local Services, and Member-Only Benefits. `}</p>
                <p className="m-0">Join Today!</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[32px] max-w-full mq800:flex-wrap mq800:gap-[32px_16px]">
                <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[38px] pl-[39px] bg-[#E8C14A] rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                  <div className="w-[153px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block">
                    Become a Member
                  </div>
                </button>
                <button className="cursor-pointer pt-4 px-[61px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-darkslategray-100">
                  <div className="w-20 relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[80px]">
                    Shop Now
                  </div>
                  <div className="h-5 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/home/align-center.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            className="h-[562px] w-[613px] relative object-contain shrink-0 [debug_commit:2554057] mq1350:flex-1"
            loading="lazy"
            alt=""
            src="/home/sofa.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[101px] box-border max-w-full text-left text-21xl text-darkslategray-100 font-title-16px-medium mq450:pb-[66px] mq450:box-border">
        <div className="w-[1070px] flex flex-col items-start justify-start gap-[64px] max-w-full mq800:gap-[16px_64px] mq1150:gap-[32px_64px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 text-4xl relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
              Save Big with Hot Rates
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[49px] max-w-full text-xl text-darkslategray-200 mq800:gap-[49px_24px] mq1150:flex-wrap">
            <div className="flex-[0.8662] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start py-[27px] px-[39px] box-border min-w-[243px] max-w-full mq450:flex-1">
              <div className="h-[126px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 px-5">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/home/fluentsavings24filled.svg"
                  />
                </div>
                <div className="relative font-medium mq450:text-base">
                  Over $3 Billion on saving
                </div>
              </div>
            </div>
            <div className="flex-[0.7254] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start py-[27px] px-[59px] box-border min-w-[243px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="h-[126px] flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[63px]">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/home/solarticketsalebold.svg"
                  />
                </div>
                <div className="relative font-medium mq450:text-base">
                  Low price guarantee
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-center py-[27px] px-5 box-border min-w-[243px] max-w-full">
              <div className="h-[126px] flex flex-col items-start justify-start gap-[16px]">
                <div className="flex-1 flex flex-row items-start justify-start py-0 px-[26px]">
                  <img
                    className="h-20 w-20 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/home/bxsupport.svg"
                  />
                </div>
                <div className="relative font-medium mq450:text-base">
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[101px] pr-5 pl-[21px] box-border max-w-full text-left text-21xl text-darkslategray-100 font-title-16px-medium mq450:pb-[43px] mq450:box-border mq1150:pb-[66px] mq1150:box-border">
        <div className="w-[1075px] flex flex-col items-start justify-start gap-[100px] max-w-full mq800:gap-[25px_100px] mq1150:gap-[50px_100px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[645px] flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <h1 className="m-0  text-4xl relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                  Our Awesome Feature
                </h1>
              </div>
              <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-px text-5xl">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[116px] shrink-0 [debug_commit:2554057] mq450:gap-[16px_32px]">
              <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 px-5 box-border">
                <img
                  src="/home/square.png"
                  className="self-stretch w-20 relative rounded-10xs bg-goldenrod overflow-hidden shrink-0"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px]">
                  <h3 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-lgi mq450:leading-[19px]">
                    Secure Shopping
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[309px] px-0 pb-0 box-border min-w-[116px] ml-[-95.5px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] shrink-0 [debug_commit:2554057] mq450:gap-[16px_32px]">
                <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 px-5 box-border">
                  <img
                    src="/home/square.png"
                    className="self-stretch w-20 relative rounded-10xs bg-goldenrod overflow-hidden shrink-0"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[61px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <h3 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-lgi mq450:leading-[19px]">
                      Free Shipping
                    </h3>
                  </div>
                  <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[116px] shrink-0 [debug_commit:2554057] ml-[-95.5px] mq450:gap-[16px_32px]">
              <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 px-5 box-border">
                <img
                  src="/home/square.png"
                  className="self-stretch w-20 relative rounded-10xs bg-goldenrod overflow-hidden shrink-0"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                  <h3 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit whitespace-pre-wrap mq450:text-lgi mq450:leading-[19px]">
                    Customer Satisfaction
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[309px] px-0 pb-0 box-border min-w-[116px] ml-[-95.5px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] shrink-0 [debug_commit:2554057] mq450:gap-[16px_32px]">
                <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 px-5 box-border">
                  <img
                    src="/home/square.png"
                    className="self-stretch w-20 relative rounded-10xs bg-goldenrod overflow-hidden shrink-0"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[25.5px]">
                    <h3 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-lgi mq450:leading-[19px]">
                      Secure Transaction
                    </h3>
                  </div>
                  <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[116px] shrink-0 [debug_commit:2554057] ml-[-95.5px] mq450:gap-[16px_32px]">
              <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 px-5 box-border">
                <img
                  src="/home/square.png"
                  className="self-stretch w-20 relative rounded-10xs bg-goldenrod overflow-hidden shrink-0"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h3 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block min-w-[99px] mq450:text-lgi mq450:leading-[19px]">
                    Support
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start pt-0 pb-[101px] pr-0 pl-5 box-border gap-[64px] max-w-full text-left text-xl text-goldenrod font-title-16px-medium mq450:gap-[16px_64px] mq800:gap-[32px_64px] mq800:pb-[66px] mq800:box-border">
        <div className="w-[1310px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[32px] max-w-full mq800:gap-[16px_32px]">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <div className="relative leading-[100%] font-semibold inline-block min-w-[80px] mq450:text-base mq450:leading-[16px]">
                Today’s
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-21xl text-darkslategray-100 mq1150:flex-wrap">
            <div className="w-[717px] flex flex-row items-start justify-start gap-[64px] max-w-full mq450:gap-[64px_16px] mq800:flex-wrap mq800:gap-[64px_32px]">
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                  Flash Sales
                </h1>
              </div>
              <div className="flex-1 flex flex-row items-start justify-between min-w-[275px] max-w-full gap-[20px] text-sm mq450:flex-wrap">
                <div className="w-[172px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-[166px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="relative leading-[100%] font-medium inline-block min-w-[36px]">
                      Days
                    </div>
                    <div className="relative leading-[100%] font-medium inline-block min-w-[41px]">
                      Hours
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-21xl">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[50px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                      03
                    </div>
                    <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-inherit text-goldenrod inline-block min-w-[11px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                      :
                    </h1>
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[47px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                      23
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0 text-21xl text-goldenrod">
                  <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-inherit inline-block min-w-[11px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                    :
                  </h1>
                </div>
                <div className="w-[83px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[100%] font-medium inline-block min-w-[56px]">
                    Minutes
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-21xl">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[40px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                      19
                    </div>
                    <h1 className="m-0 relative text-inherit leading-[100%] font-semibold font-inherit text-goldenrod inline-block min-w-[11px] mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                      :
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[100%] font-medium inline-block min-w-[61px]">
                    Seconds
                  </div>
                  <div className="w-[52px] relative text-21xl leading-[100%] font-semibold inline-block mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                    56
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[58.5px] w-[142px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                <img
                  className="h-[55px] w-[55px] relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[55px]"
                  alt=""
                  src="/home/iconamoonarrowup2light@2x.png"
                />
                <img
                  className="h-[55px] w-[55px] relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[55px]"
                  alt=""
                  src="/home/iconamoonarrowup2light-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1365px] overflow-x-auto flex flex-row items-start justify-start gap-[32px] max-w-full text-base text-black mq800:gap-[32px_16px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[75px] pb-[101px] box-border max-w-full text-left text-21xl text-darkslategray-100 font-title-16px-medium mq800:pl-[37px] mq800:pr-[37px] mq800:pb-[43px] mq800:box-border mq1150:pb-[66px] mq1150:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px_64px] mq800:gap-[32px_64px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
            More Products
          </h1>
          <div className="self-stretch h-[792px] flex flex-row flex-wrap items-start justify-start relative gap-[32px_28px] max-w-full text-13xl">
            <img
              className="h-[380px] w-[629px] absolute !m-[0] top-[0px] left-[0px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/home/frame-1000006048@2x.png"
            />
            <img
              className="h-[380px] w-[629px] absolute !m-[0] top-[0px] left-[661px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/home/frame-1000006049@2x.png"
            />
            <div className="w-[629px] !m-[0] absolute top-[412px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[78px] px-[60px] box-border gap-[32px] max-w-full">
              <div className="w-[401px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <h1 className="m-0 w-[382px] relative text-inherit leading-[100%] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[19px] mq800:text-[26px] mq800:leading-[26px]">
                  Decor Your Home with our Furtiture
                </h1>
                <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D]">
                  Crafting Comfort, Inspiring Style: Explore Endless
                  Possibilities for Home Decor with Our Exceptional Furniture
                  Designs.
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[31px] pl-8 bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                <div className="w-[138px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block">
                  View All Products
                </div>
              </button>
            </div>
            <img
              className="h-[380px] w-[629px] absolute !m-[0] top-[412px] left-[661px] overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/home/frame-1000006051@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[75px] pb-[101px] box-border max-w-full text-left text-21xl text-darkslategray-100 font-title-16px-medium mq800:pl-[37px] mq800:pr-[37px] mq800:pb-[43px] mq800:box-border mq1350:pb-[66px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px_64px] mq800:gap-[32px_64px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
            Explore Our Products
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-xl text-goldenrod mq800:gap-[16px_32px]">
            <div className="flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[32px_16px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
                    New Products
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] text-darkslategray-100">
                <div className="h-10 w-6 relative rounded-10xs bg-darkslategray-100" />
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold mq450:text-base mq450:leading-[16px]">
                    Used Products
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1008px] flex flex-row flex-wrap items-start justify-start relative gap-[48px_31px] max-w-full text-base text-darkslategray-100 mq450:h-auto mq450:min-h-[1008]">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[52px] pl-[53px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
              <div className="w-[138px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block">
                View All Products
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[75px] pb-[101px] box-border max-w-full text-left text-21xl text-darkslategray-100 font-title-16px-medium mq450:pb-7 mq450:box-border mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq1150:pb-[43px] mq1150:box-border mq1350:pb-[66px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px_64px] mq800:gap-[32px_64px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
            Explore Our Services
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-base text-goldenrod mq800:gap-[16px_32px]">
            <div className="flex flex-row items-start justify-start gap-[16px] text-xl">
              <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[100%] font-semibold inline-block min-w-[128px] mq450:text-base mq450:leading-[16px]">
                  Our Services
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-black">
              <div className="grid grid-cols-2 h-[1264px] flex-1 overflow-x-auto overflow-y-hidden  flex-row flex-wrap items-start justify-start relative gap-[64px_28px] max-w-full mq800:h-auto mq800:min-h-[1264]">
                <ServiceCard image={"/home/frame-1000006051@2x.png"} />
                <ServiceCard image={"/home/frame-1000006049@2x.png"} />
                <ServiceCard image={"/home/frame-1000006051@2x.png"} />
                <ServiceCard image={"/home/frame-1000006049@2x.png"} />
                {/* <div className="w-[629px] !m-[0] absolute top-[0px] left-[661px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[35px] pr-0 pl-px box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-[15.5px] px-5 bg-goldenrod self-stretch flex flex-row items-start justify-center hover:bg-darkgoldenrod">
                    <div className="relative text-xl leading-[24px] font-semibold font-title-16px-medium text-white text-left inline-block min-w-[100px] mq450:text-base mq450:leading-[19px]">
                      Electricity
                    </div>
                  </button>
                  <div className="self-stretch h-[387px] flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
                    <img
                      className="h-[350px] flex-1 relative max-w-full overflow-hidden"
                      alt=""
                      src="/home/frame-1000006051@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-4">
                    <div className="w-[318px] flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
                          Xfinity Comcast
                        </div>
                      </div>
                      <div className="relative leading-[24px] font-medium text-[#7D7D7D]">
                        Save Up to $100 on a Complete Internet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="flex flex-row items-start justify-center gap-[16px] max-w-full mq800:flex-wrap">
                      <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[59px] pl-[60px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                        <div className="w-[61px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block min-w-[61px]">
                          Sign up
                        </div>
                      </button>
                      <button className="cursor-pointer pt-4 px-[39px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                        <div className="w-[99px] relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[99px]">
                          More Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[629px] !m-[0] absolute top-[664px] left-[0px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[35px] pr-0 pl-px box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-[15.5px] px-5 bg-goldenrod self-stretch flex flex-row items-start justify-center hover:bg-darkgoldenrod">
                    <div className="relative text-xl leading-[24px] font-semibold font-title-16px-medium text-white text-left inline-block min-w-[113px] mq450:text-base mq450:leading-[19px]">
                      Healthcare
                    </div>
                  </button>
                  <div className="self-stretch h-[387px] flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
                    <img
                      className="h-[350px] flex-1 relative max-w-full overflow-hidden"
                      alt=""
                      src="/home/frame-1000006049@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-4">
                    <div className="w-[318px] flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
                          Xfinity Comcast
                        </div>
                      </div>
                      <div className="relative leading-[24px] font-medium text-[#7D7D7D]">
                        Save Up to $100 on a Complete Internet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="flex flex-row items-start justify-center gap-[16px] max-w-full mq800:flex-wrap">
                      <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[59px] pl-[60px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                        <div className="w-[61px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block min-w-[61px]">
                          Sign up
                        </div>
                      </button>
                      <button className="cursor-pointer pt-4 px-[39px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                        <div className="w-[99px] relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[99px]">
                          More Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[629px] !m-[0] absolute top-[664px] left-[661px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 pb-[35px] pr-0 pl-px box-border max-w-full">
                  <button className="cursor-pointer [border:none] py-[15.5px] px-5 bg-goldenrod self-stretch flex flex-row items-start justify-center hover:bg-darkgoldenrod">
                    <div className="relative text-xl leading-[24px] font-semibold font-title-16px-medium text-white text-left mq450:text-base mq450:leading-[19px]">
                      Medical Testing
                    </div>
                  </button>
                  <div className="self-stretch h-[387px] flex flex-row items-start justify-start pt-0 px-0 pb-[37px] box-border max-w-full">
                    <img
                      className="h-[350px] flex-1 relative max-w-full overflow-hidden"
                      alt=""
                      src="/home/frame-1000006051@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-4">
                    <div className="w-[318px] flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="relative leading-[24px] font-medium inline-block min-w-[129px]">
                          Xfinity Comcast
                        </div>
                      </div>
                      <div className="relative leading-[24px] font-medium text-[#7D7D7D]">
                        Save Up to $100 on a Complete Internet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="flex flex-row items-start justify-center gap-[16px] max-w-full mq800:flex-wrap">
                      <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[59px] pl-[60px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                        <div className="w-[61px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block min-w-[61px]">
                          Sign up
                        </div>
                      </button>
                      <button className="cursor-pointer pt-4 px-[39px] pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                        <div className="w-[99px] relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[99px]">
                          More Details
                        </div>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-center text-white">
              <div className="rounded-10xs bg-goldenrod overflow-hidden flex flex-row items-start justify-start pt-4 pb-[15px] pr-[54px] pl-[55px] whitespace-nowrap">
                <div className="w-[134px] relative font-medium inline-block">
                  View All Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[75px] pb-[197px] box-border max-w-full text-left text-[45px] text-darkslategray-100 font-title-16px-medium mq800:pl-[37px] mq800:pr-[37px] mq800:pb-[83px] mq800:box-border mq1350:pb-32 mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[150px] max-w-full mq450:gap-[19px_150px] mq800:gap-[37px_150px] mq1350:gap-[75px_150px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[183px] max-w-full mq450:gap-[183px_23px] mq800:gap-[183px_46px] mq1350:flex-wrap mq1350:gap-[183px_91px]">
            <div className="w-[478px] flex flex-col items-start justify-start pt-[63.5px] px-0 pb-0 box-border min-w-[478px] max-w-full mq450:pt-[41px] mq450:box-border mq800:min-w-full mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px_32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-[27px] mq450:leading-[35px] mq800:text-[36px] mq800:leading-[47px]">
                    <span>{`Join `}</span>
                    <span className="text-goldenrod">6,000+</span>
                    <span>{` Startups Growing with `}</span>
                    <span className="text-goldenrod">ETA07</span>
                  </h1>
                  <div className="h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-[#7D7D7D]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/mditick.svg"
                      />
                      <div className="relative leading-[120%]">
                        Lorem ipsum dolor sit amet
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/mditick-1.svg"
                      />
                      <div className="relative leading-[120%]">
                        Sed do eiusmod tempor
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/mditick-2.svg"
                      />
                      <div className="relative leading-[120%]">
                        ut labore et dolore magna aliqua
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] pt-4 px-10 pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                    <div className="w-[100px] relative text-base font-medium font-title-16px-medium text-white text-center inline-block min-w-[100px]">
                      Sign up Now
                    </div>
                  </button>
                  <button className="cursor-pointer pt-4 px-11 pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                    <div className="w-[89px] relative text-base font-title-16px-medium text-darkslategray-100 text-center inline-block min-w-[89px] whitespace-nowrap">
                      Learn More
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <img
              className="h-[450px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[409px] mq800:min-w-full"
              alt=""
              src="/home/frame-1000006048@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[64px] text-21xl mq450:gap-[16px_64px] mq800:gap-[32px_64px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-5xl mq450:leading-[24px] mq800:text-13xl mq800:leading-[32px]">
                Meet Our Team
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-xl text-goldenrod mq800:gap-[16px_32px]">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold inline-block min-w-[101px] mq450:text-base mq450:leading-[16px]">
                    Our Team
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32.666666666666664px] text-center text-darkslategray-100 mq800:gap-[16px]">
                <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start pt-7 px-[59px] pb-[27px] box-border min-w-[180px] max-w-[298px] mq450:p-5 mq450:box-border">
                  <div className="h-[315px] flex-1 flex flex-col items-center justify-start gap-[32px]">
                    <img
                      className="w-[180px] h-[180px] relative rounded-191xl overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="https://thispersondoesnotexist.com/"
                    />
                    <div className="w-[143px] flex flex-col items-center justify-start gap-[32px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                        <div className="w-[121px] relative leading-[100%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[16px]">
                          Philip Bryan
                        </div>
                        <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D]">
                          CEO - Co Founder
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-start justify-start py-0 px-[19px] box-border gap-[16px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--facebook.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--twitter.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--instagram.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start pt-7 px-[59px] pb-[27px] box-border min-w-[180px] max-w-[298px] mq450:p-5 mq450:box-border">
                  <div className="h-[315px] flex-1 flex flex-col items-center justify-start gap-[32px]">
                    <img
                      className="w-[180px] h-[180px] relative rounded-191xl overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://thispersondoesnotexist.com/"
                    />
                    <div className="w-[104px] flex flex-col items-center justify-start gap-[32px]">
                      <div className="self-stretch flex flex-col items-center justify-start py-0 px-0.5 gap-[8px]">
                        <div className="self-stretch relative leading-[100%] font-semibold inline-block min-w-[99px] mq450:text-base mq450:leading-[16px]">{`Francisco `}</div>
                        <div className="w-[93px] relative text-base leading-[120%] text-[#7D7D7D] inline-block min-w-[93px]">
                          Co Founder
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-start justify-start gap-[16px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--facebook-1.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--twitter-1.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--instagram-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start pt-7 px-[59px] pb-[27px] box-border min-w-[180px] max-w-[298px] mq450:p-5 mq450:box-border">
                  <div className="h-[315px] flex-1 flex flex-col items-center justify-start gap-[32px]">
                    <img
                      className="w-[180px] h-[180px] relative rounded-191xl overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://thispersondoesnotexist.com/"
                    />
                    <div className="w-[143px] flex flex-col items-center justify-start gap-[32px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                        <div className="w-[114px] relative leading-[100%] font-semibold inline-block min-w-[114px] mq450:text-base mq450:leading-[16px]">
                          Name Here
                        </div>
                        <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D]">
                          CEO - Co Founder
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-start justify-start py-0 px-[19px] box-border gap-[16px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--facebook-2.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--twitter-2.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--instagram-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-row items-start justify-start pt-7 px-[59px] pb-[27px] box-border min-w-[180px] max-w-[298px] mq450:p-5 mq450:box-border">
                  <div className="h-[315px] flex-1 flex flex-col items-center justify-start gap-[32px]">
                    <img
                      className="w-[180px] h-[180px] relative rounded-191xl overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://thispersondoesnotexist.com/"
                    />
                    <div className="w-[143px] flex flex-col items-center justify-start gap-[32px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                        <div className="w-[114px] relative leading-[100%] font-semibold inline-block min-w-[114px] mq450:text-base mq450:leading-[16px]">
                          Name Here
                        </div>
                        <div className="self-stretch relative text-base leading-[120%] text-[#7D7D7D]">
                          CEO - Co Founder
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-start justify-start py-0 px-[19px] box-border gap-[16px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--facebook-3.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--twitter-3.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icon--jamicons--outline--logos--instagram-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Homepage;

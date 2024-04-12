import { useParams } from "react-router-dom";
import { useGetServiceQuery } from "../redux/services/service";
import { useEffect, useState } from "react";

const CheckoutForService = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    licenseNumber: "",
    zip: "",
  });
  const [timeframe, setTimeframe] = useState("yearly");
  const [taxRate, setTaxRate] = useState(8.25);
  const [price, setPrice] = useState();
  const { id } = useParams();
  const { data } = useGetServiceQuery({ id });
  const calculateTax = () => {
    const priceFloat = parseFloat(price);
    const taxAmount = (priceFloat * taxRate) / 100;
    return taxAmount.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const priceFloat = parseFloat(price);
    const taxAmount = (priceFloat * taxRate) / 100;
    const totalPrice = priceFloat + taxAmount;
    return totalPrice.toFixed(2);
  };
  const taxPrice = calculateTax();
  useEffect(() => {
    setPrice(
      timeframe === "monthly" ? data?.service.price : data?.service.yearlyPrice
    );
  }, [data, timeframe]);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[99.5px] tracking-[normal] mq750:gap-[50px_99.5px] mq450:gap-[25px_99.5px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[111px] pr-[75px] pl-[72px] box-border max-w-full text-left text-[40px] text-darkslategray-100 font-poppins lg:pb-[72px] lg:box-border mq750:pl-9 mq750:pr-[37px] mq750:pb-[47px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px_64px] mq450:gap-[16px_64px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block max-w-full mq450:text-[24px] mq450:leading-[24px] mq1050:text-13xl mq1050:leading-[32px]">
            Sign up for services
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start gap-[144px] max-w-full text-base lg:flex-wrap lg:gap-[144px_72px] mq750:gap-[144px_36px] mq450:gap-[144px_18px]">
            <div className="h-[808px] w-[519px] overflow-x-auto shrink-0 flex flex-col items-start justify-start gap-[8px] min-w-[519px] max-w-full lg:flex-1 mq750:min-w-full">
              <div className="w-[517px] h-[127px] flex flex-row items-start justify-start gap-[9px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[85px]">
                    First Name
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                    <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
                    <div className="relative inline-block min-w-[98px]">
                      Date of Birth
                    </div>
                  </div>
                </div>
                <div className="h-[87px] flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[85px]">
                    Last Name
                  </div>
                  <input className=" self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
                </div>
              </div>
              <div className="w-[519px] h-[63px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border">
                <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4 max-w-full" />
              </div>
              <div className="w-[519px] h-[95px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[8px]">
                <div className="relative">Driving License Number</div>
                <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
              </div>
              <div className="w-[519px] h-[95px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[8px]">
                <div className="relative inline-block min-w-[119px]">
                  Phone Number
                </div>
                <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
              </div>
              <div className="w-[519px] h-[95px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[8px]">
                <div className="relative inline-block min-w-[113px]">
                  Email Address
                </div>
                <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
              </div>
              <div className="w-[519px] h-[95px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[8px]">
                <div className="relative inline-block min-w-[116px]">
                  Billing Address
                </div>
                <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
              </div>
              <div className="w-[517px] flex-1 flex flex-row items-start justify-start gap-[9px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative inline-block min-w-[32px]">
                      City
                    </div>
                    <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative inline-block min-w-[72px]">
                      Zip Code
                    </div>
                    <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
                  </div>
                </div>
                <div className="h-[87px] flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[42px]">
                    State
                  </div>
                  <input className="self-stretch flex-1 relative rounded-10xs bg-floralwhite overflow-hidden outline-none p-4" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[64px] min-w-[409px] max-w-full mq750:gap-[32px_64px] mq750:min-w-full mq450:gap-[16px_64px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[103px]">
                    Select A Plan
                  </div>
                  <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[25px] pb-3 text-xl">
                    <div className="relative font-medium inline-block min-w-[113px] mq450:text-base">
                      Internet Bill
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[96px]">
                    Term Period
                  </div>
                  <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-end justify-between pt-[11px] pb-3 pr-[27px] pl-[25px] gap-[20px] text-xl mq450:flex-wrap">
                    <div className="relative font-medium mq450:text-base">
                      Select a option
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[32px]"
                      alt=""
                      src="/iconamoonarrowup2light@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[122px]">
                    Select A Option
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xl mq750:flex-wrap">
                    <div
                      onClick={() => setTimeframe("yearly")}
                      className={`flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start py-[63px] pr-[70px] pl-[71px] min-w-[200px] ${
                        timeframe === "yearly"
                          ? "border-goldenrod border-[3px]"
                          : "border-darkslategray-100 border-[1px]"
                      } mq450:pl-5 mq450:pr-5 mq450:box-border`}
                    >
                      <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
                        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                          <div className="relative font-medium inline-block min-w-[123px] mq450:text-base">
                            Billed Yearly
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-13xl text-goldenrod">
                            <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-bold font-inherit inline-block min-w-[22px] mq450:text-lgi mq450:leading-[22px] mq1050:text-7xl mq1050:leading-[29px]">
                              $
                            </h1>
                            <b className="relative text-29xl leading-[54px] uppercase mq450:text-10xl mq450:leading-[32px] mq1050:text-19xl mq1050:leading-[43px]">
                              {data?.service.yearlyPrice || 0}
                            </b>
                          </div>
                        </div>
                        <div className="w-20 relative text-base text-gray-100 text-center inline-block min-w-[80px]">
                          Per Month
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => setTimeframe("monthly")}
                      className={`flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start py-[63px] pr-[71px] pl-[72px] min-w-[200px] border-[1px] border-solid ${
                        timeframe === "monthly"
                          ? "border-goldenrod border-[3px]"
                          : "border-darkslategray-100"
                      } mq450:pl-5 mq450:pr-5 mq450:box-border`}
                    >
                      <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
                        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                          <div className="relative font-medium mq450:text-base">
                            Billed Monthly
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-13xl text-goldenrod">
                            <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-bold font-inherit inline-block min-w-[22px] mq450:text-lgi mq450:leading-[22px] mq1050:text-7xl mq1050:leading-[29px]">
                              $
                            </h1>
                            <b className="relative text-29xl leading-[54px] uppercase mq450:text-10xl mq450:leading-[32px] mq1050:text-19xl mq1050:leading-[43px]">
                              {data?.service.price}
                            </b>
                          </div>
                        </div>
                        <div className="w-20 relative text-base text-gray-100 text-center inline-block min-w-[80px]">
                          Per Month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19.5px] max-w-full text-xl">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="relative font-medium inline-block min-w-[86px] mq450:text-base">
                        Subtotal
                      </div>
                      <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                        ${price}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="relative font-medium inline-block min-w-[35px] mq450:text-base">
                        Tax
                      </div>
                      <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                        ${taxPrice}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                      <div className="relative font-medium inline-block min-w-[51px] mq450:text-base">
                        Total
                      </div>
                      <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                        ${calculateTotalPrice()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap">
                <div className="flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] min-w-[112px] max-w-full border-[1px] border-solid border-darkslategray-100">
                  <input
                    className="w-full [border:none] [outline:none] placeholder:text-gray-100 text-start font-poppins text-base bg-[transparent] h-6 relative text-gray-100 inline-block p-0"
                    placeholder="Coupon Code"
                    type="text"
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[49px] pl-[51px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                  <div className="w-[115px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[115px]">
                    Apply Coupon
                  </div>
                </button>
              </div>
              <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-5 pl-[21px] bg-darkslategray-100 self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-center hover:bg-dimgray">
                <div className="w-[67px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[67px]">
                  Proceed
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CheckoutForService;

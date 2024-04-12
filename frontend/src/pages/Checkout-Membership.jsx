import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Checkout from "./Checkout";

const CheckoutForMembership = () => {
  const navigate = useNavigate();
  const { membership } = useParams();
  const [selectedMembership, setSelectedMembership] = useState(membership);
  const [monthlyPrice, setMonthlyPrice] = useState();
  const [yearlyPrice, setYearlyPrice] = useState();
  const [membershipType, setMembershipType] = useState("monthly");
  useEffect(() => {
    if (selectedMembership === "advance") {
      setMonthlyPrice(39.99);
      setYearlyPrice(34.99);
    } else if (selectedMembership === "pro") {
      setMonthlyPrice(29.99);
      setYearlyPrice(24.99);
    } else if (selectedMembership === "starter") {
      setMonthlyPrice(6.99);
      setYearlyPrice(4.99);
    }
  }, [selectedMembership]);
  const handleProceed = async () => {
    let res = await fetch(
      "http://localhost:3000/api/v1/payment/create-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: membershipType === "monthly" ? monthlyPrice : yearlyPrice,
        }),
      }
    );
    let data = await res.json();
    if (data.secret) {
      navigate("/checkout", { state: data.secret });
    }
  };
  return (
    <div className="my-10 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[99.5px] tracking-[normal] mq450:gap-[25px_99.5px] mq750:gap-[50px_99.5px]">
      <section className="w-[1107px] flex flex-row items-start justify-start pt-0 px-[72px] pb-[4.5px] box-border max-w-full text-left text-[40px] text-darkslategray-100 font-poppins mq1125:pl-9 mq1125:pr-9 mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64.3px] max-w-full mq750:gap-[16px_64.3px] mq1025:gap-[32px_64.3px]">
          <h1 className="m-0 w-[200px] relative text-inherit leading-[100%] font-bold font-inherit inline-block mq450:text-[24px] mq450:leading-[24px] mq1025:text-13xl mq1025:leading-[32px]">
            Checkout
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base">
            <div className="w-[630px] flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="w-[156px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border text-[28px]">
                <h2 className="m-0 h-[42px] flex-1 relative text-inherit font-semibold font-inherit inline-block mq450:text-[22px]">
                  Billing Plan
                </h2>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[8px]">
                <div className="relative inline-block min-w-[103px]">
                  Select A Plan
                </div>
                <select
                  onChange={(e) => setSelectedMembership(e.target.value)}
                  defaultValue={selectedMembership}
                  className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-end justify-between pt-[11px] pb-3 pr-[27px] pl-[25px] gap-[20px] text-xl mq450:flex-wrap"
                >
                  <option
                    value={"advance"}
                    className="relative font-medium inline-block min-w-[90px] mq450:text-base"
                  >
                    Advance
                  </option>
                  <option
                    value={"pro"}
                    className="relative font-medium inline-block min-w-[90px] mq450:text-base"
                  >
                    Pro
                  </option>
                  <option
                    value={"starter"}
                    className="relative font-medium inline-block min-w-[90px] mq450:text-base"
                  >
                    Starter
                  </option>
                  {/* <img
                    onClick
                    className="h-8 w-8 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[32px]"
                    alt=""
                    src="/dropdown.png"
                  /> */}
                </select>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative inline-block min-w-[122px]">
                  Select A Option
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] text-xl">
                  <div
                    onClick={() => setMembershipType("yearly")}
                    className={`flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start py-[63px] pr-[71px] pl-[72px] min-w-[200px] border-[1px] border-solid ${
                      membershipType === "yearly"
                        ? "border-goldenrod border-solid border-[2px]"
                        : "border-darkslategray-100 "
                    } mq450:pl-5 mq450:pr-5 mq450:box-border`}
                  >
                    <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                        <div className="relative font-medium inline-block min-w-[123px] mq450:text-base">
                          Billed Yearly
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-13xl text-goldenrod">
                          <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-bold font-inherit inline-block min-w-[22px] mq450:text-lgi mq450:leading-[22px] mq1025:text-7xl mq1025:leading-[29px]">
                            $
                          </h1>
                          <b className="relative text-29xl leading-[54px] uppercase mq450:text-10xl mq450:leading-[32px] mq1025:text-19xl mq1025:leading-[43px]">
                            {yearlyPrice}
                          </b>
                        </div>
                      </div>
                      <div className="w-20 relative text-base text-gray-100 text-center inline-block min-w-[80px]">
                        Per Month
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-5 px-[7px] bg-[#12a83b] bg-limegreen h-[70px] w-[70px] !m-[0] absolute top-[-33px] right-[-12px] rounded-[109px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border z-[1] hover:bg-[#12a83b]">
                      <b className="relative text-xl inline-block font-poppins text-white text-left min-w-[55px] mq450:text-base">
                        -30%
                      </b>
                    </button>
                  </div>
                  <div
                    onClick={() => setMembershipType("monthly")}
                    className={`flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start py-[63px] pr-[71px] pl-[72px] min-w-[200px] border-[1px]  border-solid ${
                      membershipType === "monthly"
                        ? "border-goldenrod border-solid border-[2px]"
                        : "border-darkslategray-100 "
                    } mq450:pl-5 mq450:pr-5 mq450:box-border`}
                  >
                    <div className="flex-1 flex flex-col items-center justify-start gap-[8px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                        <div className="relative font-medium mq450:text-base">
                          Billed Monthly
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-13xl text-goldenrod">
                          <h1 className="m-0 relative text-inherit leading-[36px] uppercase font-bold font-inherit inline-block min-w-[22px] mq450:text-lgi mq450:leading-[22px] mq1025:text-7xl mq1025:leading-[29px]">
                            $
                          </h1>
                          <b className="relative text-29xl leading-[54px] uppercase mq450:text-10xl mq450:leading-[32px] mq1025:text-19xl mq1025:leading-[43px]">
                            {monthlyPrice}
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
                      $
                      {membershipType === "monthly"
                        ? monthlyPrice
                        : yearlyPrice}
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
                      $356
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
                      $
                      {membershipType === "monthly"
                        ? monthlyPrice
                        : yearlyPrice}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                <div className="flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] min-w-[112px] max-w-full border-[1px] border-solid border-darkslategray-100">
                  <input
                    className="w-full [border:none] placeholder:text-gray-100 [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-gray-100 text-start inline-block p-0"
                    placeholder="Coupon Code"
                    type="text"
                  />
                </div>
                <button className="cursor-pointer  [border:none] pt-4 pb-[15px] pr-[49px] pl-[51px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                  <div className="w-[115px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[115px]">
                    Apply Coupon
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <Link
              onClick={handleProceed}
              className="cursor-pointer [border:none] pt-4 pb-[15px] pr-5 pl-[21px] bg-darkslategray-100 w-[630px] rounded-10xs overflow-hidden shrink-0 flex flex-row items-start justify-center box-border max-w-full hover:bg-dimgray"
            >
              <div className="w-[67px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[67px]">
                Proceed
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CheckoutForMembership;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNewOrderMutation } from "../redux/services/order";
import { useAlert } from "react-alert";
const CheckoutProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { cart } = useSelector((state) => state.cart);

  const [newOrder, newOrderResponse] = useNewOrderMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    companyName: "",
    floor: "",
  });
  useEffect(() => {
    dispatch({ type: "CALCULATE_SUBTOTAL" });
    return () => {
      dispatch({ type: "CALCULATE_SUBTOTAL" });
    };
  }, []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    newOrder({
      orderItems: cart.products,
      shippingDetails: form,
      totalPrice: cart.totalPrice,
    });
    console.log({ newOrderResponse });
  };
  useEffect(() => {
    if (newOrderResponse.error) {
      alert.error(newOrderResponse.error.data.message);
    } else if (newOrderResponse.data?.success) {
      alert.success(newOrderResponse.data.message);
    }
  }, [newOrderResponse]);
  return (
    <div className="w-full my-10 relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[99.5px] tracking-[normal] mq750:gap-[50px_99.5px] mq450:gap-[25px_99.5px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[22.5px] pr-[75px] pl-[72px] box-border max-w-full text-left text-[40px] text-darkslategray font-poppins mq750:pl-9 mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64.5px] max-w-full mq750:gap-[32px_64.5px] mq450:gap-[16px_64.5px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-[24px] mq450:leading-[24px] mq1050:text-[32px] mq1050:leading-[32px]">
            Checkout
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start gap-[144px] max-w-full text-9xl lg:flex-wrap lg:gap-[144px_72px] mq750:gap-[144px_36px] mq450:gap-[144px_18px]">
            <div className="h-full flex flex-col items-start justify-start gap-[64px] min-w-[518px] max-w-full lg:flex-1 mq750:gap-[32px_64px] mq750:min-w-full mq450:gap-[16px_64px]">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl">
                Delivery Information
              </h2>
              <form className="w-[90%] h-full my-3 overflow-hidden flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[49px]">Name</div>
                  <input
                    name="name"
                    onChange={handleChange}
                    className="outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative">Company Name</div>
                  <input
                    name="companyName"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[117px]">
                    Street Address
                  </div>
                  <input
                    name="address"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative">
                    Apartment, floor, etc. (optional)
                  </div>
                  <input
                    name="floor"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[89px]">
                    Town/City*
                  </div>
                  <input
                    name="city"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%] h-[87px] flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative inline-block min-w-[127px]">
                    Phone Number*
                  </div>
                  <input
                    name="phone"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[90%]  flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[8px]">
                  <div className="relative inline-block min-w-[121px]">
                    Email Address*
                  </div>
                  <input
                    name="email"
                    onChange={handleChange}
                    className=" outline-none p-4 self-stretch flex-1 relative rounded-10xs bg-[#fff9ec] overflow-hidden"
                  />
                </div>
                <div className="w-[451px] h-6 flex flex-row items-start justify-start gap-[16px]">
                  <input
                    className="m-0 h-[25px] w-[25px] relative rounded-[5px] box-border border-[1px] border-solid border-goldenrod"
                    type="checkbox"
                  />
                  <div className="relative text-sm shrink-0">
                    Save this information for faster check-out next time
                  </div>
                </div>
              </form>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[64px] min-w-[409px] max-w-full mq750:gap-[32px_64px] mq750:min-w-full mq450:gap-[16px_64px]">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl">
                Cart Total
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full text-base">
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
                  {cart.products.length > 0 ? (
                    cart.products.map((product) => (
                      <div
                        key={product._id}
                        className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap"
                      >
                        <div className="w-[272px] flex flex-row items-start justify-start gap-[32px] mq450:gap-[32px_16px]">
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 relative overflow-hidden shrink-0">
                            <img
                              className="absolute w-[calc(100%_-_18.2px)] top-[calc(50%_-_30px)] right-[9.2px] left-[9px] max-w-full overflow-hidden h-[60px] object-cover"
                              alt=""
                              src={product.file[0].url}
                            />
                          </button>
                          <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0">
                            <div className="relative">
                              {product.title}({product.size}/{product.color})
                            </div>
                          </div>
                        </div>
                        <div className="w-[100px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border text-right text-xl">
                          <div className="self-stretch relative font-medium whitespace-nowrap mq450:text-base">
                            ${product.price} * {product.qty}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
                      No items in cart
                    </div>
                  )}
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[19.5px] max-w-full text-xl">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[86px] mq450:text-base">
                      Subtotal
                    </div>
                    <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                      ${cart.totalPrice}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[90px] mq450:text-base">
                      Shipping
                    </div>
                    <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 mq450:text-base">
                      Free
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
                      ${cart.totalPrice}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap">
                <div className="flex-1 rounded-10xs box-border overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] min-w-[112px] max-w-full border-[1px] border-solid border-darkslategray-100">
                  <input
                    className="w-full text-start [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative placeholder:text-gray-100 text-gray-100  inline-block p-0"
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
              <button
                disabled={cart.products.length <= 0}
                onClick={submitHandler}
                className="disabled:bg-[#979999] disabled:cursor-auto cursor-pointer [border:none] pt-4 px-5 pb-[15px] bg-darkslategray-100 self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-center hover:bg-dimgray"
              >
                <div className="w-[94px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[94px]">
                  Place Order
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CheckoutProduct;

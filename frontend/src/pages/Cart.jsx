import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subTotal, setsubTotal] = useState(0);
  const { cart: stateCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    setCart(stateCart);
    dispatch({ type: "CALCULATE_SUBTOTAL" });
    setsubTotal(stateCart.totalPrice);
  }, [stateCart]);
  console.log({ stateCart });
  return (
    <div className="my-10 w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[69.5px] tracking-[normal] mq450:gap-[17px_69.5px] mq750:gap-[35px_69.5px]">
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[74px] pl-[75px] box-border max-w-full text-left text-[40px] text-darkslategray-100 font-poppins mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[51px] max-w-full mq750:gap-[25px_51px]">
          <div className="flex flex-row items-start justify-start pt-0 px-px pb-[13px]">
            <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block min-w-[91px] mq450:text-[24px] mq450:leading-[24px] mq750:text-[32px] mq750:leading-[32px]">
              Cart
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[64px] max-w-full text-base mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
              <div className="self-stretch rounded-10xs bg-[#fff9ec] overflow-hidden flex flex-row items-start justify-between py-5 pr-[87px] pl-5 box-border max-w-full gap-[20px] text-xl mq750:pr-[21px] mq750:box-border mq1100:flex-wrap mq1275:pr-[43px] mq1275:box-border">
                <div className="relative font-medium inline-block min-w-[79px] mq450:text-base">
                  Product
                </div>
                <div className="w-[630px] flex flex-row items-start justify-start gap-[203px] max-w-full mq450:gap-[203px_51px] mq750:flex-wrap mq750:gap-[203px_101px]">
                  <div className="relative font-medium inline-block min-w-[50px] mq450:text-base">
                    Price
                  </div>
                  <div className="flex-1 relative font-medium inline-block min-w-[57px] mq450:text-base">
                    Quantity
                  </div>
                  <div className="flex-1 relative font-medium inline-block min-w-[57px] mq450:text-base">
                    Subtotal
                  </div>
                </div>
              </div>
              {cart && cart.products?.length ? (
                cart.products?.map((product) => (
                  <CartItem
                    key={product.color + product.size}
                    image={product.file.length && product.file[0].url}
                    title={product.title}
                    price={product.price}
                    qty={product.qty}
                    size={product.size}
                    color={product.color}
                    product={product}
                  />
                ))
              ) : (
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
                  <div className="relative font-medium inline-block min-w-[79px] mq450:text-base">
                    Your cart is empty
                  </div>
                </div>
              )}
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                  <Link
                    to={"/products"}
                    className="cursor-pointer pt-4 px-7 pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100"
                  >
                    <div className="w-[121px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[121px]">
                      Return To Shop
                    </div>
                  </Link>
                  <button className="cursor-pointer pt-4 px-7 pb-[15px] bg-[transparent] w-[180px] rounded-10xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                    <div className="flex-1 relative text-base font-poppins text-darkslategray-100 text-center">
                      Update Cart
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[801px] flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-[28px]">
              <div className="w-[280px] rounded-10xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-4 px-6 pb-[15px] border-[1px] border-solid border-darkslategray-100">
                <input
                  className="w-full [border:none] [outline:none] font-poppins text-base bg-[transparent] h-6 relative text-gray-100 text-start inline-block p-0 placeholder:text-gray-100"
                  placeholder="Coupon Code"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[226px] max-w-full">
                <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-[34px] pl-[35px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod">
                  <div className="w-[115px] relative text-base font-medium font-poppins text-white text-center inline-block min-w-[115px]">
                    Apply Coupon
                  </div>
                </button>
              </div>
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-[22px]">
                Cart Total
              </h2>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-xl">
            <div className="w-[630px] flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19.5px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[86px] mq450:text-base">
                      Subtotal
                    </div>
                    <div className="w-[100px] relative font-medium text-right flex items-center shrink-0 whitespace-nowrap mq450:text-base">
                      ${subTotal}
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
                      ${subTotal}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <Link
                  to={"/checkout-product"}
                  className="cursor-pointer [border:none] pt-4 px-[31px] pb-[15px] bg-goldenrod rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod"
                >
                  <div className="w-[166px] relative text-base font-medium font-poppins text-white text-center inline-block">
                    Proceed to checkout
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

const CartItem = ({ title, price, image, qty, size, color, product }) => {
  const dispatch = useDispatch();
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
    dispatch({ type: "CALCULATE_SUBTOTAL" });
  };
  const decreaseQty = (payload) => {
    dispatch({ type: "DECREASE_QUANTITY", payload });
    dispatch({ type: "CALCULATE_SUBTOTAL" });
  };
  return (
    <div className="self-stretch rounded-10xs bg-[#fff9ec] overflow-x-auto flex flex-row items-start justify-start p-5 gap-[32px] mq750:gap-[32px_16px]">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 relative overflow-hidden shrink-0">
        <img
          className="absolute w-[calc(100%_-_18.2px)] top-[calc(50%_-_30px)] right-[9.2px] left-[9px] max-w-full overflow-hidden h-[60px] object-cover"
          alt=""
          src={image}
        />
      </button>
      <div className="w-[409px] shrink-0 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
        <div className="relative">
          {title}({size}/{color})
        </div>
      </div>
      <div className="w-[221px] shrink-0 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
        <div className="relative inline-block min-w-[41px] whitespace-nowrap">
          ${price}
        </div>
      </div>
      <div className="w-[259px] shrink-0 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
        <div className="w-[101px] rounded-md box-border overflow-hidden flex flex-row items-start justify-start pt-3 pb-[11px] pr-3.5 pl-[15px] border-[1px] border-solid border-darkslategray-100">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="relative inline-block min-w-[16px]">{qty}</div>
            </div>
            <div className="h-8 w-4 relative">
              <img
                className="absolute top-[0px] cursor-pointer left-[0px] w-4 h-4 overflow-hidden object-contain"
                alt=""
                src="/cart/increase-qty.png"
                onClick={() => addToCart({ ...product, qty: 1, color, size })}
              />
              <img
                className="absolute top-[16px] left-[0px] w-4 h-4 overflow-hidden"
                alt=""
                src="/cart/decrease-qty.png"
                onClick={() => decreaseQty({ ...product, qty: 1, color, size })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
        <div className="relative inline-block min-w-[41px] whitespace-nowrap">
          ${price * qty}
        </div>
      </div>
    </div>
  );
};

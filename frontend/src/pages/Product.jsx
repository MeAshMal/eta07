import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/services/product";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductsDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useGetProductQuery({ id });
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  useEffect(() => {
    if (data) setProduct(data.product);
    if (product.sizes?.length > 0 && product.colors?.length > 0) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
    }
  }, [data, product.sizes]);

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  return (
    <div className="my-5 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[53px] tracking-[normal] mq750:gap-[26px_53px]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full text-left text-5xl text-darkslategray-100 font-title-16px-medium mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[64px] max-w-full lg:flex-wrap mq750:gap-[64px_32px] mq450:gap-[64px_16px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq750:flex-wrap mq450:gap-[32px_16px]">
              <div className="h-[448px] w-[130px] flex flex-col items-start justify-start gap-[16px]">
                {product.file?.map((url) => {
                  return (
                    <img
                      key={url._id}
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src={url.url}
                    />
                  );
                })}
              </div>
              <div className="h-[600px] flex-1 relative bg-whitesmoke overflow-hidden min-w-[432px] max-w-full mq750:min-w-full">
                {product.file?.length && (
                  <img
                    className="absolute top-[calc(50%_-_157px)] left-[calc(50%_-_223px)] w-[446px] h-fit object-cover"
                    loading="lazy"
                    alt=""
                    src={product?.file[0].url}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-[400px] flex flex-col items-end justify-start gap-[40px] min-w-[400px] max-w-full lg:flex-1 mq750:min-w-full mq450:gap-[20px_40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[23.666666666666668px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-[16px] font-heading-24px-regular">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit mq450:text-lgi mq450:leading-[19px]">
                  {product.title}
                </h3>
                <div className="w-[294px] flex flex-col items-start justify-start gap-[16px] text-sm text-gray-200 font-title-16px-medium">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-5 flex-1 flex flex-row items-start justify-start">
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        loading="lazy"
                        alt=""
                        src="/productcard/Vector.svg"
                      />
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        alt=""
                        src="/productcard/Vector.svg"
                      />
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        alt=""
                        src="/productcard/Vector.svg"
                      />
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        alt=""
                        src="/productcard/Vector.svg"
                      />
                      <img
                        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                        alt=""
                        src="/productcard/Vector.svg"
                      />
                    </div>
                    <div className="flex-[0.9245] flex flex-col items-start justify-start py-0 pr-2 pl-0">
                      <div className="relative leading-[21px] text-[#7D7D7D] font-medium inline-block min-w-[98px]">
                        (150 Reviews)
                      </div>
                    </div>
                    <div className="h-[18.5px] flex flex-col items-start justify-start pt-[2.5px] pb-0 pr-[7px] pl-0 box-border">
                      <div className="w-px h-[17px] relative box-border opacity-[0.5] border-r-[1px] border-solid border-darkslategray-100" />
                    </div>
                    <div className="relative leading-[21px] font-medium text-[#00CB45] inline-block min-w-[56px]">
                      In Stock
                    </div>
                  </div>
                  <div className="relative text-5xl tracking-[0.03em] leading-[24px] font-heading-24px-regular text-darkslategray-100 inline-block min-w-[97px] whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
                    ${product.price}
                  </div>
                </div>
              </div>
              <div className="w-[373px] relative text-sm leading-[21px] text-[#7D7D7D] inline-block max-w-full">
                {product.details}
              </div>
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/productcard/heart.pngs"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-xl">
                <div className="flex-1 flex flex-row items-end justify-start gap-[19px] max-w-full mq450:flex-wrap">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[10px] min-w-[221px] max-w-full mq450:flex-wrap">
                    <div className="h-36 flex flex-col items-start justify-start gap-[24px] min-w-[159px] mq450:flex-1">
                      <div className="flex flex-row items-start justify-start gap-[7px] font-heading-24px-regular">
                        <div className="mr-6 relative tracking-[0.03em] leading-[20px] font-medium inline-block min-w-[85px] mq450:text-base mq450:leading-[16px]">
                          Colours:
                        </div>
                        {product.colors?.length &&
                          product.colors?.map((color) => (
                            <div
                              style={{ backgroundColor: color }}
                              onClick={() => setSelectedColor(color)}
                              className={`h-4 w-4 rounded-full  ${
                                selectedColor === color && "border-black"
                              } border-2`}
                              key={color}
                            />
                          ))}
                      </div>
                      {product.sizes?.length && (
                        <div className="h-8 flex flex-row items-start justify-start gap-[16px] text-sm">
                          <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-2 pl-0 text-xl font-heading-24px-regular">
                            <div className="relative  tracking-[0.03em] leading-[20px] font-medium inline-block min-w-[49px] mq450:text-base mq450:leading-[16px]">
                              Size:
                            </div>
                          </div>
                          {product.sizes?.length &&
                            product.sizes.map((size) => {
                              return (
                                <div
                                  key={size}
                                  onClick={() => setSelectedSize(size)}
                                  className={` ${
                                    selectedSize === size &&
                                    "bg-goldenrod text-white border-none"
                                  } h-[34px] w-[34px] rounded box-border overflow-hidden  shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-[#00000080]`}
                                >
                                  <div
                                    id="size"
                                    className="relative font-medium inline-block "
                                  >
                                    {size}
                                  </div>
                                </div>
                              );
                            })}
                          {/* <div className="h-[34px] w-[34px] rounded box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-1.5 px-[11px] border-[1px] border-solid border-[#00000080]">
                          <div className="relative leading-[21px] font-medium inline-block min-w-[9px]">
                            S
                          </div>
                        </div> */}
                        </div>
                      )}
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div
                          onClick={() => {
                            qty > 1 && setQty(qty - 1);
                          }}
                          className="h-11 w-10 relative rounded-tl rounded-tr-none rounded-br-none rounded-bl box-border overflow-hidden shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-darkslategray-100"
                        >
                          <img
                            className="absolute top-[10px] left-[8px] w-6 h-6 overflow-hidden"
                            loading="lazy"
                            alt=""
                            src="/icons/icon-minus.png"
                          />
                        </div>
                        <div className="h-11 overflow-hidden flex flex-row items-start justify-start py-2 px-[34px] shrink-0 [debug_commit:f6aba90] z-[1] ml-[-1px] border-t-[1px] border-solid border-darkslategray-100 border-b-[1px]">
                          <div className="relative leading-[28px] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                            {qty}
                          </div>
                        </div>
                        <div
                          onClick={() => setQty(qty + 1)}
                          className="h-11 w-10 relative rounded-tr rounded-tl-none rounded-bl-none rounded-br box-border overflow-hidden shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-darkslategray-100"
                        >
                          <img
                            className="absolute top-[10px] left-[8px] w-6 h-6 overflow-hidden"
                            loading="lazy"
                            alt=""
                            src="/icons/icon-plus.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[111px] text-sm">
                      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
                        {product && (
                          <button
                            onClick={() =>
                              addToCart({
                                ...product,
                                qty,
                                color: selectedColor,
                                size: selectedSize,
                              })
                            }
                            className="cursor-pointer [border:none] py-2.5 px-12 bg-goldenrod rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkgoldenrod"
                          >
                            <div className="relative text-base leading-[24px] font-medium font-title-16px-medium text-white text-left inline-block min-w-[69px]">
                              Buy Now
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="h-[42px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                    <img
                      className="ml-12 w-10 h-10 border-1 border-[#00000080] relative rounded overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/productcard/heart.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-10xs box-border overflow-hidden flex flex-col items-start justify-start py-6 px-0 gap-[15.5px] max-w-full text-base border-[1px] border-solid border-darkslategray-200">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-[29px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <div className="h-[45px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <img
                      className="w-10 h-10 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icons/icon-delivery.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[179px]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[103px]">
                      Free Delivery
                    </div>
                    <div className="relative text-xs [text-decoration:underline] leading-[18px] font-medium">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/underline-1.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                  <div className="h-[45px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <img
                      className="w-10 h-10 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icons/Icon-return.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[122px]">
                      Return Delivery
                    </div>
                    <div className="relative text-xs leading-[18px] font-medium">
                      {`Free 30 Days Delivery Returns. `}
                      <span className="[text-decoration:underline]">
                        Details
                      </span>
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
export default ProductsDetailsPage;

import { useEffect, useState } from "react";
import { useGetServiceQuery } from "../redux/services/service";
import { Link, useParams } from "react-router-dom";
import { useGetMyDetailsQuery } from "../redux/services/auth";

const ServiceDetailsPage = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { data } = useGetServiceQuery({ id });
  useEffect(() => {
    if (data) setService(data.service);
  }, [data]);
  const { data: loggedInData } = useGetMyDetailsQuery();
  return (
    <div className="my-12 w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[95px] tracking-[normal] mq750:gap-[47px_95px] mq450:gap-[24px_95px]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[79px] pl-[75px] box-border max-w-full text-left text-5xl text-[#292c2d] font-title-14px-regular mq750:pl-[37px] mq750:pr-[39px] mq750:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="h-[452px] w-[130px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
              {service.file?.length &&
                service.file.map((file) => (
                  <img
                    key={file._id}
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                    loading="lazy"
                    alt=""
                    src={file.url}
                  />
                ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 pb-0 pr-7 pl-0 box-border min-w-[450px] max-w-full mq750:min-w-full">
            {service.file?.length && (
              <img
                className="self-stretch h-[600px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                src={service?.file[0].url}
              />
            )}
          </div>
          <div className="w-[400px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3 font-heading-24px-regular">
              <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-poppins mq450:text-lgi mq450:leading-[19px]">
                {service?.title}
              </h3>
            </div>
            <div className="w-[206px] flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border text-sm text-gray-100">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
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
                  <div className="relative leading-[21px] font-medium inline-block min-w-[98px]">
                    (150 Reviews)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3 font-heading-24px-regular">
              <div className="relative tracking-[0.03em] leading-[24px] mq450:text-lgi mq450:leading-[19px]">
                ${service.price}/Month
              </div>
            </div>
            <div className="w-[373px] flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full text-sm text-gray-100">
              <div className="flex-1 relative leading-[21px] inline-block max-w-full">
                {service?.details}
              </div>
            </div>
            <div className="self-stretch h-3 flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
              <img
                className="h-px flex-1 relative max-w-full overflow-hidden"
                loading="lazy"
                alt=""
                src={"/service/UnderLine.png"}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-base">
              {service.features?.map((feature) => (
                <div
                  key={feature}
                  className="flex flex-row items-start justify-start gap-[16px]"
                >
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="w-2 h-2 relative rounded-[50%] bg-goldenrod" />
                  </div>
                  <div className="relative leading-[21px] inline-block min-w-[108px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[268px] h-[149px] flex flex-col items-start justify-start gap-[20px] text-base">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px_32px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[33px] mq450:gap-[33px_16px]">
                  <Link
                    to={
                      loggedInData?.success
                        ? "/checkout-service/" + service?._id
                        : "/signup"
                    }
                    className="cursor-pointer [border:none] h-16  bg-goldenrod w-44 rounded-10xs overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkgoldenrod"
                  >
                    <div className="text-start relative m-auto text-base font-medium  text-white inline-block">
                      {loggedInData?.success ? "Book Now" : "Sign Up"}
                    </div>
                  </Link>
                  <div>
                    <img
                      className="border-2 border-[#292c2d] h-[55px] w-[55px] relative rounded-10xs overflow-hidden shrink-0 min-h-[55px]"
                      loading="lazy"
                      alt=""
                      src="/productcard/heart.png"
                    />
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
export default ServiceDetailsPage;

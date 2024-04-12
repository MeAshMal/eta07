import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { useGetAllServicesQuery } from "../redux/services/service";

const ShopServices = () => {
  const [services, setServices] = useState([]);
  const { data } = useGetAllServicesQuery();
  useEffect(() => {
    if (data) setServices(data.services);
  }, [data]);
  return (
    <div className="my-6 w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[97px] tracking-[normal] mq450:gap-[24px_97px] mq750:gap-[48px_97px]">
      <main className="self-stretch flex flex-row items-start justify-end pt-0 pb-[77px] pr-[74px] pl-[75px] box-border max-w-full lg:pb-8 lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:pb-[21px] mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[62px] max-w-full text-left text-[40px] text-darkslategray-100 font-title-16px-medium mq450:gap-[15px_62px] mq750:gap-[31px_62px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq450:text-[24px] mq450:leading-[24px] mq1050:text-[32px] mq1050:leading-[32px]">
                  Shop Services
                </h1>
              </div>
              <div className="h-[45px] w-[300px] rounded-10xs bg-white shadow-[0px_6px_15px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border gap-[30px] mq450:gap-[164px_82px]">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-[35px] flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border font-title-16px-medium font-medium text-base text-darkslategray-200 min-w-[41px]"
                  placeholder="Location"
                  type="text"
                />
                <img
                  className="h-[25px] w-[25px] m-auto mr-3 relative overflow-hidden shrink-0 invert"
                  alt=""
                  src="/header/searchIcon.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-xl text-goldenrod mq750:gap-[16px_32px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="h-10 w-6 relative rounded-10xs bg-goldenrod" />
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[100%] font-semibold inline-block min-w-[128px] mq450:text-base mq450:leading-[16px]">
                  Our Services
                </div>
              </div>
            </div>
            <div className="w-[1290px]  grid grid-cols-2 gap-10 items-start justify-start relative h-fit text-base text-black mq750:h-auto mq750:min-h-[1928]">
              {services && services.length > 0 ? (
                services.map((service) => (
                  <ServiceCard
                    _id={service._id}
                    title={service.title}
                    details={service.details}
                    type={service.type}
                    key={service._id}
                    image={service.file[0].url}
                  />
                ))
              ) : (
                <>
                  <p>Sorry, no service available for now</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ShopServices;

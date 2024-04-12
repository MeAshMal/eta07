import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/SideBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  useChartStatsQuery,
  useDashboardStatsQuery,
} from "../../redux/services/dashboard";
import { useEffect, useState } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Purchase Summary",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

const AdvanceUserDashboard = () => {
  const result = useChartStatsQuery();
  const [purchasesArray, setPurchasesArray] = useState([]);
  const [savedArray, setSavedArray] = useState([]);
  const [cancelledArray, setCancelledArray] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({});

  const dashboardResult = useDashboardStatsQuery();
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets,
  };
  useEffect(() => {
    if (result.data) {
      Object.keys(result.data.stats).map((key) => {
        let purchasedCount = purchasesArray;
        purchasedCount.push(result.data.stats[key].purchasedCount);
        setPurchasesArray(purchasedCount);
        let savedCount = savedArray;
        savedCount.push(result.data.stats[key].savedCount);
        setSavedArray(savedCount);
        let cancelledCount = cancelledArray;
        cancelledCount.push(result.data.stats[key].cancelledCount);
        setCancelledArray(cancelledCount);
      });
    }
    setDatasets([
      {
        label: "Cancelled",
        data: cancelledArray,
        backgroundColor: "gray",
      },
      {
        label: "Save",
        data: savedArray,
        backgroundColor: "#292c2d",
      },
      {
        label: "Purchase",
        data: purchasesArray,
        backgroundColor: "#b58f17",
      },
    ]);
    if (dashboardResult.data) {
      setDashboardStats(dashboardResult.data.stats);
    }
    console.log({ dashboardStats });
  }, [
    result,
    purchasesArray,
    savedArray,
    cancelledArray,
    dashboardResult,
    dashboardStats,
  ]);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1100:pl-5 mq1100:box-border">
        <div className="h-[944px] w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1100:hidden">
          <Sidebar />
        </div>
        <section className="flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-col items-start justify-start pt-[49px] pb-[38px] pr-[31px] pl-8 box-border gap-[32px] max-w-[calc(100%_-_250px)] text-left text-8xl text-darkslategray-100 font-poppins mq750:gap-[16px_32px] mq750:pt-[21px] mq750:pb-5 mq750:box-border mq1100:pt-8 mq1100:pb-[25px] mq1100:box-border mq1100:max-w-full">
          <div className="self-stretch rounded-3xs flex flex-row items-start justify-center gap-[33px] mq750:gap-[33px_16px] mq1100:flex-wrap">
            <div className="flex-[0.9869] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[21px] px-[22px] box-border gap-[16px] min-w-[191px] max-w-[195px] text-white font-poller-one mq450:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="rounded-53xl bg-goldenrod overflow-hidden flex flex-row items-start justify-start py-[9px] pr-3.5 pl-[15px]">
                  <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[21px] mq450:text-3xl">
                    $
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 text-darkslategray-100 font-poppins">
                  <div className="relative font-semibold inline-block min-w-[85px] mq450:text-3xl">
                    ${dashboardStats?.totalPurchase}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-4 text-base text-darkslategray-100 font-poppins">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[119px]">
                    Total Purchase
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[33px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[53px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9477] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[21px] px-[25px] box-border gap-[16px] min-w-[191px] max-w-[195px] mq450:flex-1">
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/shape.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[79px] mq450:text-3xl">
                    ${dashboardStats?.totalSaved}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[25.5px] text-base">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[94px]">
                    Total Saved
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[5px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[84px]">
                      -23% Average
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start p-[21px] box-border gap-[16px] min-w-[191px] max-w-[195px]">
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-0 px-px box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                    alt=""
                    src="/shape-1.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <div className="relative font-semibold inline-block min-w-[85px] mq450:text-3xl">
                      ${dashboardStats?.totalPurchase}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-base">
                <div className="flex flex-row items-start justify-start py-0 px-[13px]">
                  <div className="relative inline-block min-w-[127px]">
                    Product/service
                  </div>
                </div>
                <div className="relative text-xs text-darkslategray-300">
                  {dashboardStats?.productAndServiceOrderPercent}
                </div>
              </div>
            </div>
            <div className="flex-[0.8758] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[21px] px-[30.5px] box-border gap-[16px] min-w-[191px] max-w-[195px] mq450:flex-1">
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                  alt=""
                  src="/shape-2.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[68px] mq450:text-3xl">
                    ${dashboardStats?.cancelledOrders?.price}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[26px] text-base">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[82px]">
                    Cancelled
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-[15.5px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[51px]">
                      {dashboardStats?.cancelledOrders?.length} Order(s)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.7647] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[21px] px-[39px] box-border gap-[16px] min-w-[191px] max-w-[195px] mq450:flex-1">
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="h-[50px] w-[50px] relative rounded-53xl overflow-hidden shrink-0"
                  alt=""
                  src="/shape-3.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[51px] mq450:text-3xl">
                    ${dashboardStats?.returned?.price}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[22px] text-base">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[73px]">
                    Returned
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[4.5px] text-xs text-darkslategray-300">
                    <div className="relative inline-block min-w-[64px]">
                      {dashboardStats?.returned?.length} Product(s)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[32px] max-w-full text-xl mq750:gap-[32px_16px] mq1100:flex-wrap">
            <div
              id="chartStart"
              className="flex-1 flex flex-col items-start justify-start gap-[35px] min-w-[507px] max-w-full mq450:gap-[17px_35px] mq750:min-w-full"
            >
              <Bar
                style={{ height: "300px", background: "white" }}
                options={options}
                data={data}
              />
              {/* <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start py-[23px] pr-[22px] pl-[23px] box-border gap-[32px] max-w-full mq450:gap-[16px_32px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="relative font-semibold mq450:text-base">{`Purchase Summary `}</div>
                    <div className="h-[27px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-sm">
                      <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 gap-[8px_6px]">
                        <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                          <div className="relative font-medium inline-block min-w-[44px]">
                            Yearly
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative rounded-10xs overflow-hidden shrink-0 object-contain min-h-[24px]"
                          alt=""
                          src="/iconamoonarrowup2light@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full text-xs text-darkslategray-300">
                  <div className="w-[735px] overflow-x-auto flex flex-col items-end justify-start relative gap-[28px] max-w-full">
                    <div className="w-[735px] flex flex-col items-start justify-start gap-[17px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full">
                        <div className="relative inline-block min-w-[34px]">
                          400 K
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[435px] max-w-full">
                          <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslategray-300" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[271px] pb-[13.3px] box-border relative max-w-full">
                        <div className="w-full !m-[0] absolute top-[11px] right-[0px] left-[0px] flex flex-row items-start justify-start gap-[32px] max-w-full mq1275:flex-wrap">
                          <div className="relative inline-block min-w-[33px]">
                            300 K
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[435px] max-w-full mq1275:min-w-full">
                            <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslategray-300" />
                          </div>
                        </div>
                        <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start gap-[32px] max-w-full mq1275:flex-wrap">
                          <div className="relative inline-block min-w-[33px]">
                            200 K
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[435px] max-w-full mq1275:min-w-full">
                            <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslategray-300" />
                          </div>
                        </div>
                        <div className="w-[85px] flex flex-col items-start justify-start pt-1.5 px-[22px] pb-[11.7px] box-border relative gap-[4px] text-center text-5xs text-darkslategray-100">
                          <div className="w-[38px] relative inline-block min-w-[38px] z-[5]">
                            Purchase
                          </div>
                          <div className="w-5 relative inline-block min-w-[20px] z-[5]">
                            Save
                          </div>
                          <div className="w-[calc(100%_-_11px)] h-full absolute !m-[0] top-[0px] right-[11px] bottom-[0px] left-[0px]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white shadow-[0px_1px_5px_rgba(26,_6,_78,_0.25)] z-[4]">
                              <div className="absolute top-[0px] left-[0px] rounded-10xs bg-gainsboro w-[74px] h-14" />
                              <img
                                className="absolute top-[48.4px] left-[37.7px] rounded-sm w-[15.1px] h-[15.4px] object-contain z-[1]"
                                alt=""
                                src="/shape-4.svg"
                              />
                            </div>
                            <div className="absolute top-[8px] left-[10px] rounded-[50%] bg-goldenrod w-2 h-2 z-[5]" />
                            <div className="absolute top-[24px] left-[10px] rounded-[50%] bg-darkslategray-100 w-2 h-2 z-[5]" />
                            <div className="absolute top-[40px] left-[10px] rounded-[50%] bg-darkgray w-2 h-2 z-[5]" />
                          </div>
                          <div className="self-stretch relative inline-block min-w-[41px] z-[5]">
                            Cancelled
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[732px] flex flex-row items-start justify-start relative gap-[32px]">
                      <div className="relative inline-block min-w-[30px]">
                        100 K
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full">
                        <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslategray-300" />
                      </div>
                      <img
                        className="h-[142px] w-[55px] absolute !m-[0] top-[-108.5px] right-[307px] object-contain z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-1000006232@2x.png"
                      />
                    </div>
                    <div className="w-0 h-[146px] !m-[0] absolute bottom-[10px] left-[87px] flex flex-row items-end justify-start">
                      <img
                        className="h-[146px] w-0 relative object-contain z-[1]"
                        alt=""
                        src="/line-42.svg"
                      />
                      <div className="h-[120px] w-0 flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border">
                        <img
                          className="w-0 flex-1 relative max-h-full object-contain z-[1]"
                          alt=""
                          src="/line-41.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="w-0 h-[146px] absolute !m-[0] right-[307px] bottom-[10px] object-contain z-[1]"
                      alt=""
                      src="/line-46.svg"
                    />
                    <img
                      className="w-0 h-[71px] absolute !m-[0] top-[41px] left-[87px] object-contain z-[1]"
                      alt=""
                      src="/line-40.svg"
                    />
                    <div className="w-0 h-[105px] !m-[0] absolute bottom-[10px] left-[143px] flex flex-row items-start justify-start">
                      <img
                        className="h-[105px] w-0 relative object-contain z-[1]"
                        alt=""
                        src="/line-42-1.svg"
                      />
                      <div className="h-[88px] w-0 flex flex-row items-start justify-start">
                        <img
                          className="h-[88px] w-0 relative object-contain z-[1]"
                          alt=""
                          src="/line-41-1.svg"
                        />
                        <img
                          className="h-[59.1px] w-0 relative object-contain z-[1]"
                          alt=""
                          src="/line-40-1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-0 h-[105px] !m-[0] absolute bottom-[10px] left-[316px] flex flex-row items-start justify-start">
                      <img
                        className="h-[105px] w-0 relative object-contain z-[1]"
                        alt=""
                        src="/line-43.svg"
                      />
                      <div className="h-[88px] w-0 flex flex-row items-start justify-start">
                        <img
                          className="h-[88px] w-0 relative object-contain z-[2]"
                          alt=""
                          src="/line-44.svg"
                        />
                        <img
                          className="h-[59.1px] w-0 relative object-contain z-[3]"
                          alt=""
                          src="/line-45.svg"
                        />
                      </div>
                    </div>
                    <div className="w-0 h-[142px] !m-[0] absolute top-[18px] left-[199px] flex flex-row items-start justify-start">
                      <img
                        className="h-[142px] w-0 relative object-contain z-[1]"
                        alt=""
                        src="/line-42-2.svg"
                      />
                      <div className="h-[120px] w-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                        <img
                          className="w-0 flex-1 relative max-h-full object-contain z-[2]"
                          alt=""
                          src="/line-41-2.svg"
                        />
                      </div>
                      <img
                        className="h-[83px] w-0 relative object-contain z-[3]"
                        alt=""
                        src="/line-40-2.svg"
                      />
                    </div>
                    <img
                      className="w-0 h-[158px] absolute !m-[0] top-[21.5px] left-[255px] object-contain z-[1]"
                      alt=""
                      src="/group-1000006230@2x.png"
                    />
                    <img
                      className="w-0 h-[183px] absolute !m-[0] top-[9px] right-[250px] z-[1]"
                      alt=""
                      src="/group-1000006234.svg"
                    />
                    <img
                      className="w-0 h-[66px] absolute !m-[0] right-[194px] bottom-[10px] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/group-1000006235@2x.png"
                    />
                    <img
                      className="w-0 h-[138px] absolute !m-[0] top-[9px] right-[138px] object-contain z-[1]"
                      alt=""
                      src="/group-1000006236@2x.png"
                    />
                    <img
                      className="w-0 h-[110px] absolute !m-[0] top-[45.5px] right-[82px] object-contain z-[1]"
                      alt=""
                      src="/group-1000006237@2x.png"
                    />
                    <img
                      className="w-0 h-[68px] absolute !m-[0] top-[66.5px] right-[26px] object-contain z-[1]"
                      alt=""
                      src="/group-1000006238@2x.png"
                    />
                    <img
                      className="w-0 h-[71px] absolute !m-[0] top-[41px] right-[307px] object-contain z-[3]"
                      alt=""
                      src="/line-47.svg"
                    />
                    <div className="w-[720px] flex flex-row items-start justify-start gap-[32px]">
                      <div className="relative inline-block min-w-[18px]">
                        0 K
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full">
                        <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkslategray-300" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[669px] flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                      <div className="relative inline-block min-w-[23px]">
                        Jan
                      </div>
                      <div className="relative inline-block min-w-[22px]">
                        Feb
                      </div>
                      <div className="relative inline-block min-w-[23px]">
                        Mar
                      </div>
                      <div className="relative inline-block min-w-[21px]">
                        Apr
                      </div>
                      <div className="relative inline-block min-w-[26px]">
                        May
                      </div>
                      <div className="relative inline-block min-w-[22px]">
                        Jun
                      </div>
                      <div className="relative inline-block min-w-[17px] mq750:w-full mq750:h-[17px]">
                        Jul
                      </div>
                      <div className="relative inline-block min-w-[24px]">
                        Aug
                      </div>
                      <div className="relative inline-block min-w-[23px]">
                        Sep
                      </div>
                      <div className="relative inline-block min-w-[22px]">
                        Oct
                      </div>
                      <div className="relative inline-block min-w-[23px]">
                        Nov
                      </div>
                      <div className="relative inline-block min-w-[24px]">
                        Dec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-end justify-start pt-[23px] pb-[30px] pr-[30px] pl-[25px] gap-[32px] text-base mq450:gap-[16px_32px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xl mq450:flex-wrap">
                  <div className="relative font-semibold mq450:text-base">
                    Payment History
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-xs text-goldenrod">
                    <div className="relative [text-decoration:underline] font-medium inline-block min-w-[65px]">
                      View more
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
                  <div className="h-[37.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                    <img
                      className="w-9 h-9 relative rounded-9xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[62px] pl-0 box-border min-w-[131px]">
                    <div className="relative font-medium">Product Payment</div>
                    <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[71px]">
                      #4085094807
                    </div>
                  </div>
                  <div className="w-[141px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-xs">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative font-medium inline-block min-w-[76px]">
                        June 4, 2023
                      </div>
                      <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[45px] whitespace-nowrap">
                        05:34 AM
                      </div>
                    </div>
                  </div>
                  <div className="w-[108px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                  <div className="w-[123px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-sm text-tomato">
                    <div className="relative font-medium inline-block min-w-[58px]">
                      Pending
                    </div>
                  </div>
                  <div className="h-[34.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
                    <img
                      className="w-[30px] h-[30px] relative rounded-9xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/option.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
                  <div className="h-[37.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                    <img
                      className="w-9 h-9 relative rounded-9xl overflow-hidden shrink-0"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[66px] pl-0 box-border min-w-[131px]">
                    <div className="relative font-medium">Service Payment</div>
                    <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[77px] z-[1]">
                      #34004560936
                    </div>
                  </div>
                  <div className="w-[141px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-xs">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative font-medium inline-block min-w-[76px]">
                        June 4, 2023
                      </div>
                      <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[45px] whitespace-nowrap z-[1]">
                        05:34 AM
                      </div>
                    </div>
                  </div>
                  <div className="w-[108px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                  <div className="w-[123px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-sm text-limegreen">
                    <div className="relative font-medium inline-block min-w-[70px]">
                      Complete
                    </div>
                  </div>
                  <div className="h-[34.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
                    <img
                      className="w-[30px] h-[30px] relative rounded-9xl overflow-hidden shrink-0"
                      alt=""
                      src="/option-1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
                  <div className="h-[37.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                    <img
                      className="w-9 h-9 relative rounded-9xl overflow-hidden shrink-0"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[35px] pl-0 box-border min-w-[131px]">
                    <div className="relative font-medium">
                      Membership Charge
                    </div>
                    <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[71px] z-[1]">
                      #4085094807
                    </div>
                  </div>
                  <div className="w-[141px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-xs">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative font-medium inline-block min-w-[76px]">
                        June 4, 2023
                      </div>
                      <div className="relative text-3xs text-darkslategray-300 inline-block min-w-[45px] whitespace-nowrap z-[1]">
                        05:34 AM
                      </div>
                    </div>
                  </div>
                  <div className="w-[108px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                    <div className="relative font-medium inline-block min-w-[42px] whitespace-nowrap">
                      $560
                    </div>
                  </div>
                  <div className="w-[123px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-sm text-limegreen">
                    <div className="relative font-medium inline-block min-w-[70px]">
                      Complete
                    </div>
                  </div>
                  <div className="h-[34.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
                    <img
                      className="w-[30px] h-[30px] relative rounded-9xl overflow-hidden shrink-0"
                      alt=""
                      src="/option-2.svg"
                    />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="w-[295px] flex flex-col items-start justify-start gap-[32px] min-w-[295px] text-8xl text-white mq450:gap-[16px_32px] mq1100:flex-1">
              <div className="self-stretch rounded-3xs bg-goldenrod overflow-hidden flex flex-col items-start justify-start p-4 gap-[16px]">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative inline-block min-w-[86px] mq450:text-3xl">
                    $425k
                  </b>
                  <div className="relative text-base text-darkslategray-100 inline-block min-w-[119px]">
                    Active Balance
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="h-5 w-5 relative overflow-hidden shrink-0">
                        <div className="absolute top-[0px] left-[0px] w-full h-full">
                          <div className="absolute top-[0px] left-[0px] rounded bg-gray-200 w-full h-full" />
                          <img
                            className="absolute h-[78%] w-[62.38%] top-[11%] right-[21.43%] bottom-[11%] left-[16.19%] max-w-full overflow-hidden max-h-full z-[1]"
                            loading="lazy"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                      <div className="relative inline-block min-w-[30px]">
                        Buy
                      </div>
                    </div>
                    <div className="w-[70px] relative font-semibold text-right inline-block min-w-[70px] whitespace-nowrap">
                      $ 2458.0
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-6 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        alt=""
                        src="/pharrowupbold@2x.png"
                      />
                      <div className="relative inline-block min-w-[79px]">
                        Discounts
                      </div>
                    </div>
                    <div className="w-[70px] relative font-semibold text-right inline-block min-w-[70px] whitespace-nowrap">
                      $ 2458.0
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="h-6 flex flex-row items-start justify-center gap-[8px]">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/pharrowupbold-1@2x.png"
                      />
                      <div className="relative inline-block min-w-[46px]">
                        Taxes
                      </div>
                    </div>
                    <div className="w-[70px] relative font-semibold text-right inline-block min-w-[70px] whitespace-nowrap">
                      $ 2458.0
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-4 pb-[15px] pr-10 pl-[42px] bg-darkslategray-100 rounded-10xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray mq450:pl-5 mq450:box-border">
                  <div className="w-[181px] relative text-base font-poppins text-white text-center inline-block">
                    Add/withdrawal Funds
                  </div>
                </button>
              </div>
              {/* <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[23px] px-[25px] pb-[30px] gap-[32px] text-xl text-darkslategray-100 mq450:gap-[16px_32px] mq450:pt-5 mq450:pb-5 mq450:box-border">
                <div className="relative font-semibold mq450:text-base">
                  Upcoming Delivers
                </div>
                <div className="flex flex-col items-start justify-start gap-[32px] text-base">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="h-[39px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-9 h-9 relative rounded-53xl overflow-hidden shrink-0"
                        alt=""
                        src="/shape-5.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Pickup Parcel From Hub</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-darkslategray-300">
                        <div className="relative inline-block min-w-[67px]">
                          24/01/2024
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1 h-1 relative rounded-[50%] bg-darkgray" />
                        </div>
                        <div className="relative inline-block min-w-[37px] whitespace-nowrap">
                          $3483
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="h-[39px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-9 h-9 relative rounded-53xl overflow-hidden shrink-0"
                        alt=""
                        src="/shape-6.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Pickup Return to Rider</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-darkslategray-300">
                        <div className="relative inline-block min-w-[67px]">
                          24/01/2024
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1 h-1 relative rounded-[50%] bg-darkgray" />
                        </div>
                        <div className="relative inline-block min-w-[37px] whitespace-nowrap">
                          $3483
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="h-[39px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-9 h-9 relative rounded-53xl overflow-hidden shrink-0"
                        alt=""
                        src="/shape-7.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative">Pickup Parcel From Hub</div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-darkslategray-300">
                        <div className="relative inline-block min-w-[67px]">
                          24/01/2024
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <div className="w-1 h-1 relative rounded-[50%] bg-darkgray" />
                        </div>
                        <div className="relative inline-block min-w-[37px] whitespace-nowrap">
                          $3483
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center text-xs text-goldenrod">
                  <div className="relative [text-decoration:underline] font-medium inline-block min-w-[65px]">
                    View more
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdvanceUserDashboard;

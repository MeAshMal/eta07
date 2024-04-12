import Header from "../../components/Admin/Header";
import SideBar from "../../components/Admin/SideBar";

const AdvanceUserProfile = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <main className="self-stretch h-[944px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full mq1025:pl-5 mq1025:box-border">
        <div className="self-stretch w-[250px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[17px] px-2.5 box-border mq1025:hidden">
          <SideBar />
        </div>
        <footer className="self-stretch flex-1 rounded-t-mini rounded-b-none bg-floralwhite overflow-hidden flex flex-row items-end justify-start py-[141px] px-[35px] box-border max-w-[calc(100%_-_250px)] mq1025:pt-[92px] mq1025:pb-[92px] mq1025:box-border mq1025:max-w-full mq450:pt-[60px] mq450:pb-[60px] mq450:box-border">
          <form className="m-0 flex-1 rounded-[10px] bg-white flex flex-col items-end justify-start pt-[154px] pb-[50.9px] pr-[45px] pl-[31px] box-border relative gap-[64px] max-w-full mq750:gap-[16px_64px] mq750:pt-[100px] mq750:pb-[33px] mq750:box-border mq1100:gap-[32px_64px] mq1100:pr-[22px] mq1100:box-border">
            <div className="w-[180px] h-[180px] absolute !m-[0] top-[-90px] left-[calc(50%_-_90px)] flex items-center justify-center z-[0]">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.067)]"
                loading="lazy"
                alt=""
                src="/group-1000006225.svg"
              />
            </div>
            <div className="self-stretch h-[319px] flex flex-row flex-wrap items-start justify-start relative gap-[32px_28px] max-w-full">
              <div className="w-80 !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block">
                  First Name
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px]">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left inline-block min-w-[43px]">
                    Philip
                  </div>
                </div>
              </div>
              <div className="w-80 !m-[0] absolute top-[0px] left-[352px] flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block">
                  Last Name
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px]">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left inline-block min-w-[46px]">
                    Bryan
                  </div>
                </div>
              </div>
              <div className="w-80 !m-[0] absolute top-[0px] left-[704px] flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block">
                  Email
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px]">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left whitespace-nowrap">
                    phiiphbryan@gmail.com
                  </div>
                </div>
              </div>
              <div className="h-[85px] w-80 !m-[0] absolute top-[117px] left-[0px] flex flex-col items-start justify-start pt-0 px-0 pb-[59px] box-border gap-[4.1px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block shrink-0 [debug_commit:f6aba90]">
                  Address
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] shrink-0 [debug_commit:f6aba90]">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                    Kingston, 5236, United State
                  </div>
                </div>
              </div>
              <div className="h-[85px] w-80 !m-[0] absolute top-[117px] left-[352px] flex flex-col items-start justify-start pt-0 px-0 pb-[59px] box-border gap-[4.1px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block shrink-0 [debug_commit:f6aba90]">
                  Mobile Number
                </div>
                <button className="cursor-pointer [border:none] pt-4 px-6 pb-[15px] bg-floralwhite self-stretch rounded-10xs overflow-hidden flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90] hover:bg-linen">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left inline-block min-w-[117px]">
                    +9 123 456 789
                  </div>
                </button>
              </div>
              <div className="h-[85px] w-80 !m-[0] absolute top-[117px] left-[704px] flex flex-col items-start justify-start pt-0 px-0 pb-[59px] box-border gap-[4.1px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block shrink-0 [debug_commit:f6aba90]">
                  Billing Address 1
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] shrink-0 [debug_commit:f6aba90]">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                    Kingston, 5236, United State
                  </div>
                </div>
              </div>
              <div className="w-80 !m-[0] absolute top-[234.1px] left-[0px] flex flex-col items-start justify-start gap-[4px]">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block">
                  Billing Address 1
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px] whitespace-nowrap">
                  <div className="relative text-base font-poppins text-darkslategray-100 text-left">
                    Kingston, 5236, United State
                  </div>
                </div>
              </div>
              <div className="w-[672px] !m-[0] absolute top-[234.1px] left-[352px] flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="w-[190.2px] relative text-base font-poppins text-darkslategray-100 text-left inline-block">
                  Shipping Address
                </div>
                <div className="self-stretch rounded-10xs bg-floralwhite overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-[15px]">
                  <div className="relative text-base font-poppins text-darkslategray-100 whitespace-pre-wrap text-left">
                    XYZ Street, City, United States (630) 530-3555
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1010px] flex flex-row items-start justify-center max-w-full">
              <button className="cursor-pointer pt-4 px-12 pb-[15px] bg-[transparent] rounded-10xs overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <div className="w-[82px] relative text-base font-poppins text-darkslategray-100 text-center inline-block min-w-[82px]">
                  Edit Profile
                </div>
              </button>
            </div>
          </form>
        </footer>
      </main>
    </div>
  );
};

export default AdvanceUserProfile;

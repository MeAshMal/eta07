import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useGetMyDetailsQuery,
  useLogoutMutation,
} from "../redux/services/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    cart: { products },
  } = useSelector((state) => state.cart);
  const result = useGetMyDetailsQuery();
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [show, setShow] = useState(true);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };
  const handleMouseLeave = () => {
    setMouseEnter(false);
  };
  const [logout, logoutResult] = useLogoutMutation();
  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    if (result.data?.success) {
      setIsLoggedIn(true);
    }
    if (logoutResult.data?.success) {
      setIsLoggedIn(false);
    }
    setTimeout(() => {
      setMouseEnter(false);
    }, 10 * 1000);
    if (location.pathname.includes("admin")) {
      setShow(false);
    }
  }, [result, logoutResult, isLoggedIn, location]);
  const navigator = (path) => {
    navigate(path);
  };
  return (
    show && (
      <>
        <header className="h-fit bg-white overflow-hidden flex flex-row items-start justify-start pt-[27px] px-[75px] pb-[26px] box-border gap-[44px] top-[0] z-[99] sticky max-w-full text-left text-base text-gray-200 font-title-16px-medium mq800:gap-[44px_22px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border">
          <Link
            to="/"
            className="h-[47px] w-[154px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border"
          >
            <img
              className="self-stretch h-[47px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logo.png"
            />
          </Link>
          <nav className="m-0 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full mq1150:hidden">
            <nav className="m-0 flex flex-row items-start justify-start gap-[35px] text-left text-base text-darkslategray-100 font-title-16px-medium mq450:hidden mq800:gap-[35px_17px]">
              <Link
                to={"/products"}
                className="relative inline-block min-w-[116px] whitespace-nowrap"
              >
                Shop Products
              </Link>
              <Link
                to={"/services"}
                className="relative inline-block min-w-[112px] whitespace-nowrap"
              >
                Shop Services
              </Link>
              <Link
                to="/memberships"
                className="relative inline-block min-w-[109px]"
              >
                Memberships
              </Link>
              <Link
                to={"/agent-referrals"}
                className="relative inline-block min-w-[122px] whitespace-nowrap"
              >
                Agent Referrals
              </Link>
            </nav>
          </nav>
          <div className="h-[46px] w-[300px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="self-stretch flex-1 rounded-10xs bg-goldenrod overflow-hidden flex flex-row items-start justify-between py-0 pr-0 pl-[22px] gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <input
                  className="relative font-medium inline-block min-w-[57px] text-inherit outline-none bg-inherit"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <img
                className="h-[30px] w-[30px] m-auto relative overflow-hidden shrink-0"
                alt=""
                src="/header/searchIcon.png"
              />
            </div>
          </div>
          <div className="h-[41px] w-[140px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-center text-[10px] text-white">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-9 w-9 relative rounded-8xl overflow-hidden shrink-0 min-h-[36px]"
                loading="lazy"
                alt=""
                src="/productcard/heart.png"
              />
              <Link to={"/cart"} className="h-9 flex-1 relative">
                <img
                  className="absolute h-3/4 w-9/12 top-[11.11%] right-[13.89%] bottom-[13.89%] left-[11.11%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/header/Cart1.png"
                />
                <div className="absolute h-[44.44%] w-[44.44%] top-[-2.78%] right-[-8.33%] bottom-[58.33%] left-[63.89%] rounded-[45px] bg-red box-border overflow-hidden flex flex-row items-start justify-start py-0 px-1 z-[1] border-[1px] border-solid border-white">
                  <b className="w-1.5 relative inline-block min-w-[6px]">
                    {products?.length}
                  </b>
                </div>
              </Link>
              <div>
                <img
                  onClick={isLoggedIn && (() => navigator("/login"))}
                  onMouseOver={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  className="h-9 w-9 relative rounded-8xl overflow-hidden shrink-0 min-h-[36px]"
                  loading="lazy"
                  alt=""
                  src={
                    result.data?.user?.avatar?.url
                      ? result.data?.user?.avatar?.url
                      : "/header/profileIcon.png"
                  }
                />
              </div>
            </div>
          </div>
        </header>
        {isLoggedIn && mouseEnter && (
          <div
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute z-[100] top-[87px] pr-[140px] gap-5 right-10 shadow-2xl rounded-lg shadow-[rgba(0,0,0,0.25)]  bg-white text-black flex flex-col justify-center p-7"
          >
            <Link to="/admin/dashboard">Dashboard</Link>
            {/* <Link to="/wallet">Wallet</Link> */}
            <Link to="/admin/profile">My Profile</Link>
            <Link to="/admin/order">Order</Link>
            <Link to="/admin/wishlist">My Wishlist</Link>
            <button onClick={handleLogout} className="text-start">
              Logout
            </button>
          </div>
        )}
        {/* <div className=""></div> */}
      </>
    )
  );
};

export default Header;

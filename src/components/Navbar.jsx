import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import searchIcon from "../assets/ic_search2.svg";
import cancelIcon from "../assets/ic_cancel.svg";

const Navbar = () => {
  const location = useLocation();

  const [onHomePage, setOnHomePage] = useState();

  useEffect(() => {
    if (location.pathname == "/") {
      setOnHomePage(true);
    } else {
      setOnHomePage(false);
    }
  }, [location]);

  return (
    <nav
      className={`${
        !onHomePage && "bg-[#F2F6FD]"
      } px-[20px] xmd:px-[50px] xl:px-[100px] pt-[24px] flex justify-between items-center`}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {!onHomePage && (
        <div className="hidden xmd:flex w-[500px] xl:w-[557px] bg-[#FBFAFC] border border-[#D4DCF1] py-[16px] px-[12px] rounded-[6px] gap-[13.85px] items-center">
          <img src={searchIcon} alt="search icon" />
          <input
            className="flex-1 bg-transparent text-[14px] text-[#101012] placeholder-[#101012] outline-none"
            placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
            type="text"
          />
          <img src={cancelIcon} alt="cancel icon" />
        </div>
      )}

      <div className="flex items-center gap-[13px]">
        <NavLink to="/all-reviews">Reviews</NavLink>
        <p className="text-[#101012] font-[500]">Welcome!</p>
        <img
          className="h-[36px] w-[36px] rounded-full"
          src={avatar}
          alt="user avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;

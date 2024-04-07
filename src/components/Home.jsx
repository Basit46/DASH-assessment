import React from "react";
import search from "../assets/ic_search.svg";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home px-[20px] xmd:px-[50px] xl:px-[100px] mt-[40px] flex flex-col xl:flex-row items-center gap-[70px] xl:gap-0 justify-between">
      <div>
        <h1 className="text-center xl:text-left text-[45px] vsm:text-[50px] md:text-[64px] font-bold text-[#1E1E1E] leading-[1.2] md:leading-[77px]">
          Find a place you
          <br className="hidden vsm:block" /> will love to live!
        </h1>
        <p className="text-center xl:text-left my-[40px] text-[#1E1E1E] text-[20px] md:text-[24px] leading-[29px]">
          See through the lenses of people who have
          <br className="hidden vsm:block" /> lived or visited the neighbourhood
          you might
          <br className="hidden vsm:block" /> have in mind.
        </p>
        <div className="w-[90%] mx-auto xl:mx-0 md:w-[557px] bg-[#F3F7FE]  py-[16px] px-[12px] flex gap-[13.85px] items-center">
          <img src={search} alt="search icon" />
          <input
            className="flex-1 bg-transparent text-[14px] text-[#484851] outline-none"
            placeholder="Enter Address"
            type="text"
          />
        </div>
        <button className="block mx-auto xl:mx-0 mt-[20px] bg-[#3366FF] py-[16px] px-[40px] text-white font-medium">
          SEARCH
        </button>
      </div>

      <Link
        to="/all-reviews"
        className="sections relative h-fit xl:h-[1024px] w-full xl:w-[506px] overflow-hidden flex flex-col gap-[30px] xl:gap-0 xl:flex-row bg-[#FAFCFD] justify-between"
      >
        <div className="section1 xl:translate-y-[-100%] flex flex-row xl:flex-col gap-0 xl:gap-[24px]">
          <div className="flex flex-row xl:flex-col gap-[24px]">
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="network" color="#FCDCEF" />
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="security" color="#D1E4FA" />
          </div>
          <div className="flex flex-row xl:flex-col gap-[24px]">
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="network" color="#FCDCEF" />
            <HeroCard label="power" color="#F66A57" />
            <HeroCard label="security" color="#D1E4FA" />
          </div>
        </div>
        <div className="section2 translate-x-[-100%] xl:translate-x-0  flex flex-row xl:flex-col gap-0 xl:gap-[24px]">
          <div className="flex flex-row xl:flex-col gap-[24px]">
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="network" color="#FCDCEF" />
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="security" color="#D1E4FA" />
          </div>
          <div className="flex flex-row xl:flex-col gap-[24px]">
            <HeroCard label="traffic" color="#F5E9CB" />
            <HeroCard label="network" color="#FCDCEF" />
            <HeroCard label="power" color="#F66A57" />
            <HeroCard label="security" color="#D1E4FA" />
          </div>
        </div>

        <div className="herocards-overlay absolute h-full w-full top-0 left-0"></div>
      </Link>
    </div>
  );
};

export default Home;

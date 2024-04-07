import React from "react";
import avatar from "../assets/hero_avatar.svg";
import ratingIcon from "../assets/rating.svg";
import like from "../assets/thumb-u.svg";
import dislike from "../assets/thumbs-d.svg";
import comment_icon from "../assets/comment_icon.svg";

const HeroCard = ({ label = "traffic", color }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className="w-[239px] h-[233px] flex flex-col justify-between rounded-[15px] bg-white p-[16px]">
      <div className="flex items-center justify-between text-[#1E1E1E]">
        <div className="flex items-center gap-[5px]">
          <img src={avatar} alt="avatar" />
          <span className="">
            <p className="text-[12px] leading-[15px] font-medium">James T.</p>
            <p className="text-[8px] font-[300] leading-[10px]">5 months ago</p>
          </span>
        </div>
        <div>
          <p className="text-[11px] leading-[140%] font-medium">Ikate, Lekki</p>
          <img src={ratingIcon} alt="rating" />
        </div>
      </div>

      <p className="text-[14px] leading-[140%] text-[#1E1E1E]">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are lots stores and Supermarkets.
      </p>

      <div className="flex justify-between items-center">
        <span className="reactions-wrap flex items-center gap-[10px]">
          <span>
            <img src={like} alt="like" />
            <p>24</p>
          </span>
          <span>
            <img className="mt-[4px]" src={dislike} alt="dislike" />
            <p>02</p>
          </span>
          <span>
            <img className="mt-[4px]" src={comment_icon} alt="comment" />
            <p>125</p>
          </span>
        </span>

        <div
          style={style}
          className={`border-[#A07C22] text-[#594510] text-[9px] leading-[10px] font-medium border-[0.5] py-[2px] px-[8px] rounded-[7px]`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

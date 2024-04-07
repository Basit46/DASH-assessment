import React from "react";
import avatar from "../assets/hero_avatar.svg";
import { IoMdStar } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { LiaCommentAlt } from "react-icons/lia";

const defaultText =
  "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.";

const Review = ({
  like = "1224",
  dislike = "4",
  comment = "24",
  rating = 4,
  text = defaultText,
}) => {
  return (
    <div className="w-full pb-[16px] border-b border-b-[#D9D9D9]">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-[8px]">
          <img className="h-[24px] w-[24px]" src={avatar} alt="avatar" />
          <p className="text-[14px] text-[#1E1E1E]">James T.</p>
          <p className="text-[14px] text-[#1E1E1E99]">5 months ago</p>
        </span>
        <span className="flex items-center gap-[4px]">
          <IoMdStar className="text-[gold] text-[12px]" />
          <p className="text-[14px] text-[#1E1E1E]">{rating.toFixed(1)}</p>
        </span>
      </div>
      <p className="mt-[8px] mb-[13.5px] leading-[150%] text-[#18181B]">
        {text}
      </p>
      <div className="reactions2-wrap flex items-center gap-[20px]">
        <span>
          <BiLike />
          <p>{like}</p>
        </span>
        <span>
          <BiDislike />
          <p>{dislike}</p>
        </span>
        <span>
          <LiaCommentAlt />
          <p>{comment}</p>
        </span>
      </div>
    </div>
  );
};

export default Review;

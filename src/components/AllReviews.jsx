import React, { useRef } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Review from "./Review";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import searchIcon from "../assets/ic_search2.svg";
import cancelIcon from "../assets/ic_cancel.svg";

const AllReviews = ({ setIsModalOpen, reviews }) => {
  const divRef = useRef();

  const handleScroll = () => {
    divRef.current.scrollLeft += 100;
  };

  return (
    <div className="w-full">
      <div className="px-[20px] xmd:px-[50px] xl:px-[100px] pt-[16px] pb-[20px] bg-[#F2F6FD]">
        <div className="xmd:hidden mb-[10px] flex w-full  bg-[#FBFAFC] border border-[#D4DCF1] py-[16px] px-[12px] rounded-[6px] gap-[13.85px] items-center">
          <img src={searchIcon} alt="search icon" />
          <input
            className="flex-1 bg-transparent text-[14px] text-[#101012] placeholder-[#101012] outline-none"
            placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
            type="text"
          />
          <img src={cancelIcon} alt="cancel icon" />
        </div>
        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-0 justify-between xl:items-center">
          <div>
            <h1 className="text-[20px] md:text-[24px] leading-[29px] font-medium text-[#1E1E1E]">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h1>
            <p className="mt-[4px] text-[#18181B]">
              <span className="font-[600]">“450”</span>{" "}
              <span className="font-[500]">Reviews</span> (People are raving
              about the selected location)
            </p>
          </div>
          <div className="flex gap-[16px]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#3366FF] py-[6px] vsm:py-[16px] px-[10px] vsm:px-[40px] rounded-[6px] font-medium text-white"
            >
              LEAVE A REVIEW
            </button>
            <div className="p-[16px] border-[1.5px] rounded-[6px] border-[#3366FF] grid place-items-center">
              <CiBookmark className="text-[#3366FF]" />
            </div>

            <div className="p-[16px] border-[1.5px] rounded-[6px] border-[#3366FF] grid place-items-center">
              <IoShareSocialOutline className="text-[#3366FF]" />
            </div>
          </div>
        </div>
        <div className="mt-[16px] flex justify-between gap-[10px] items-center">
          <div
            ref={divRef}
            className="flex-1 overflow-x-auto vsm:overflow-x-hidden scroll-smooth"
          >
            <div className="w-fit flex items-center gap-[16px]">
              {filterList.map((filter, index) => (
                <button
                  key={index}
                  className="bg-[#FBFAFC] py-[4px] px-[8px] rounded-[4px] border-[0.2px] border-[#1E1E1E] whitespace-nowrap"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleScroll}
            className="bg-[#FFFFFFE6] h-[24px] w-[24px] rounded-[22px] grid place-items-center"
          >
            <MdOutlineKeyboardArrowRight className="text-[#344054]" />
          </button>
        </div>
      </div>

      <div className="w-full px-[20px] xmd:px-[50px] xl:px-[100px] mt-[32px] flex flex-col xmd:flex-row gap-[28px] justify-between">
        <div className="flex-1 flex flex-col gap-[16px]">
          {reviews
            .slice()
            .reverse()
            .map((review, i) => (
              <Review key={i} rating={review.rating} text={review.text} />
            ))}
          <Review like="1224" dislike="4" comment="24" />
          <Review like="1000" dislike="24" comment="24" />
        </div>

        <div className="xmd:sticky top-[40px] pb-[40px] xmd:pb-0 w-full xmd:w-[486px] h-fit flex flex-wrap gap-[16px]">
          <div className="relative w-full vsm:w-[48%] xmd:w-[235px] h-[224px] rounded-[8px] overflow-hidden group">
            <img
              className="h-full w-full object-cover"
              src={img1}
              alt="location image"
            />
            <div className="group-hover:top-0 absolute top-[100%] left-0 bg-[#1E1E1EBF] h-full w-full cursor-pointer grid place-content-center duration-500">
              <p className="whitespace-nowrap font-medium text-[#FBFAFC]">
                VIEW MORE
              </p>
            </div>
          </div>
          <div className="relative w-full vsm:w-[48%] xmd:w-[235px] h-[224px] rounded-[8px] overflow-hidden group">
            <img
              className="h-full w-full object-cover"
              src={img2}
              alt="location image"
            />
            <div className="group-hover:top-0 absolute top-[100%] left-0 bg-[#1E1E1EBF] h-full w-full cursor-pointer grid place-content-center duration-500">
              <p className="whitespace-nowrap font-medium text-[#FBFAFC]">
                VIEW MORE
              </p>
            </div>
          </div>
          <div className="relative w-full vsm:w-[48%] xmd:w-[235px] h-[224px] rounded-[8px] overflow-hidden group">
            <img
              className="h-full w-full object-cover"
              src={img3}
              alt="location image"
            />
            <div className="group-hover:top-0 absolute top-[100%] left-0 bg-[#1E1E1EBF] h-full w-full cursor-pointer grid place-content-center duration-500">
              <p className="whitespace-nowrap font-medium text-[#FBFAFC]">
                VIEW MORE
              </p>
            </div>
          </div>
          <div className="relative w-full vsm:w-[48%] xmd:w-[235px] h-[224px] rounded-[8px] overflow-hidden group">
            <img
              className="h-full w-full object-cover"
              src={img4}
              alt="location image"
            />
            <div className="group-hover:top-0 absolute top-[100%] left-0 bg-[#1E1E1EBF] h-full w-full cursor-pointer grid place-content-center duration-500">
              <p className="whitespace-nowrap font-medium text-[#FBFAFC]">
                VIEW MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const filterList = [
  "Schools",
  "Hospitals",
  "Resort Parks",
  "Shopping Malls",
  "Airport",
  "Train Station",
  "Nightlife",
  "Public Wife",
  "Parking Lot",
  "Security",
  "Public Transport",
  "Bus Station",
  "Quiet",
];

export default AllReviews;

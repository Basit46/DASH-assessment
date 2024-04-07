import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";

const CreateReview = ({ isModalOpen, setIsModalOpen, setReviews }) => {
  const [val, setVal] = useState("");
  const [changeBtnColour, setChangeBtnColour] = useState(false);

  useEffect(() => {
    if (val != "") {
      setChangeBtnColour(true);
    } else {
      setChangeBtnColour(false);
    }
  }, [val]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (val != "") {
      await setReviews((prev) => [...prev, { rating: 4, text: val }]);
      setVal(" ");
      setIsModalOpen(false);
      alert("Review Added");
    } else {
      alert("Please add a review");
    }
  };

  return (
    <div
      className={`${
        !isModalOpen && "hidden"
      } fixed top-0 left-0 h-full w-full bg-[#1D3045] opacity-[0.98] grid place-items-center`}
    >
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[695px] h-fit md:h-[587px] rounded-[6px] p-[24px] bg-[#FAFCFD] text-[#1E1E1E] border border-[#D4DCF1]"
      >
        <h1 className="font-medium text-center text-[18px] tracking-[0.15px]">
          Review Location
        </h1>

        <p className="mt-[5px] mb-[20px] font-medium text-center md:text-left md:text-[20px]">
          Bonny and Clyde Street, Ajao Estate, Lagos
        </p>

        <select className="w-full bg-[#F3F7FE] h-[50px] rounded-[6px] px-[16px]">
          <option value="">Select Amenities</option>
          <option value="traffic">Traffic</option>
          <option value="Network">Network</option>
          <option value="Power">Power</option>
          <option value="Security">Security</option>
          <option value="Weather">Traffic</option>
        </select>

        <div className="mt-[16px]">
          <p className="mb-[5px] font-medium text-[14px]">Rate Location</p>
          <span className="flex gap-[8px] text-[#FFC70066] text-[20px]">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </span>
        </div>

        <div className="mt-[24px]">
          <p className="mb-[14px] text-[14px]">Write Review</p>
          <textarea
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full h-[173px] rounded-[6px] p-[12px] resize-none bg-[#FBFAFC] border border-[#D4DCF1]"
          ></textarea>
        </div>

        <span className="mt-[5px] mb-[21.5px] flex gap-[6px] items-center">
          <input type="checkbox" />
          <p className="text-[14px] text-[#484851]">Post as Anonymous</p>
        </span>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`${
              changeBtnColour ? "bg-[blue]" : "bg-[#E4E9FB]"
            } w-[48%] py-[7px] vsm:py-[16px] px-[10px] vsm:px-[40px] rounded-[6px] text-white font-medium`}
          >
            SUBMIT
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-[48%] border-[0.5px] border-[#5378F6] py-[7px] vsm:py-[16px] px-[10px] vsm:px-[40px] rounded-[6px] text-[#3366FF] font-medium"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;

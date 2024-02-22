import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
import ReachTexsEditor from "./ReachTexsEditor";
const InputfilledExplanation = () => {
  return (
    <div className="w-[99%] rounded-lg bg-[#000] m-auto mt-6">
      <div className="flex items-center justify-between px-3">
        <button className="flex items-center gap-1 py-1 px-2 bg-[#464646] text-white text-[12px] m-3 rounded-md ">
          {" "}
          <span>
            <FaArrowLeft />
          </span>{" "}
          <p>Back to the question</p>
        </button>
        <div className="flex">
          <button className="flex items-center gap-1 py-1 px-2 bg-[#00b3ce] text-white text-[12px] m-3 rounded-md ">
            {" "}
            <span>
              <IoSaveOutline />
            </span>{" "}
            <p> Save andwer explanation</p>
          </button>
          <button className="flex items-center gap-1 py-1 px-2 bg-[#f71a42] text-white text-[12px] m-3 rounded-md ">
            {" "}
            <span>
              <RiDeleteBin6Line />
            </span>{" "}
            <p>Delete</p>{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full item-center justify-center px-2 pb-5 gap-2">
        <div className="flex items-center justify-center border-dotted border-2 border-white w-[28%] aspect-square rounded-lg">
          <div className="flex flex-col items-center justify-center text-white text-sm gap-2">
            <p>Add Media</p>
            <span className="p-2 bg-[#616161] text-[22px] rounded-lg">
              <CiImageOn />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center border-dotted border-2 border-white w-[70%]  rounded-lg">
          <div className="w-full "><ReachTexsEditor/></div>
          
        </div>
      </div>
    </div>
  );
};

export default InputfilledExplanation;

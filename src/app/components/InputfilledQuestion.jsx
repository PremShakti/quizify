import React from "react";
import {
  MdExposurePlus2,
  MdFormatBold,
  MdFormatUnderlined,
  MdOutlineFormatColorText,
} from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { FaItalic, FaPlus } from "react-icons/fa6";
import { LuSigma } from "react-icons/lu";
import { TbMathXMinusX, TbMathXPlusX } from "react-icons/tb";
// import { RiGalleryFill, RiGalleryLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import ReachTexsEditor from "./ReachTexsEditor";
const InputfilledQuestion = () => {
  return (
    <div className="w-full md:w-[70%] m-auto h-[400px] mt-4 rounded-md bg-[#521a3c] p-2">
      {/* upper */}

      <ReachTexsEditor />

      {/* <div className="h-[45%] w-full border border-white rounded-lg my-2 text-white">
        <div className="flex items-center justify-start gap-2 text-sm mt-2 px-3">
          <span>
            <MdOutlineFormatColorText />
          </span>
          <span>
            <MdFormatBold />
          </span>
          <span>
            <FaItalic />
          </span>
          <span>
            <MdFormatUnderlined />
          </span>
          <span>
            <FaPlus />
          </span>
          <span>
            <IoCodeSlash />
          </span>
          <span>
            <TbMathXMinusX />
          </span>
          <span>
            <MdExposurePlus2 />
          </span>
          <span>
            <LuSigma />
          </span>
          <span>
            <GrGallery />
          </span>
        </div>
        <textarea
          type="text"
          name="question"
          id=""
          placeholder="Type Question Here"
          className=" h-[80%] w-[95%] md:w-[97%] mt-2 ml-3 p-1 border-none outline-none bg-[#521a3c] text-white"
        />
      </div> */}

      {/* lowerformultiple */}
      <div className="flex">

      </div>
    </div>
  );
};

export default InputfilledQuestion;

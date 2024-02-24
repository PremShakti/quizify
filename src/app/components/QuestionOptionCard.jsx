import React, { useEffect, useState } from "react";
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
  import { GrGallery } from "react-icons/gr";
const QuestionOptionCard = ({index}) => {

const [bgcolor,Setbgcolor]=useState("")
    useEffect(()=>{
if(index%2==0){
    Setbgcolor("#0c6ca8")
}else{
    Setbgcolor("#009ba4") 
}
    },[index])
  return (
    <>
      <div className="h-[220px] w-[165px] pb-3  rounded-lg my-2 text-white" style={{backgroundColor:bgcolor}}>
        <div className="btns flex flex-wrap items-center justify-start gap-2 text-sm mt-2 px-3">
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
          placeholder="Type answer optios here"
          style={{backgroundColor:bgcolor}}
          className=" h-[80%] w-[90%] md:w-[97%] mt-2  p-1 border-none outline-none bg-[#521a3c] text-white text-[12px]"
        />
      </div>
    </>
  );
};

export default QuestionOptionCard;

"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import LitagCard from "./LitagCard";
import { IncreaseQuestions, searchLib } from "../redux/slice";
import { CiSearch } from "react-icons/ci";
import { FaSave } from "react-icons/fa";



const Sidebartoglemenue = () => {
  const leftbarTogle = useSelector((store) => store.leftsidetoglemenue);
  const LitagsOfarray = useSelector((store) => store.arrayofLitags);
  const dispatch = useDispatch();
  const increaseQ = () => {

    dispatch(IncreaseQuestions());
  
  };

  const searchLibBtn = () => {
    
    dispatch(searchLib());
  };

  return (
    <div
      className="leftsidebar z-50 md:w-[20%] w-[190px]  fixed bg-white h-[90%] overflow-y-auto"
      style={{
        transform: !leftbarTogle ? "translateX(-100%)" : "translateX(0%)",
      }}
    >
      <div className="flex mt-3 ml-3">
        <span>4</span> Questions
      </div>
      <div className="min-h-full">
        <ol className="list-decimal ml-7  ">
          {LitagsOfarray?.map((item, i) => (
            <LitagCard data={item} key={i} />
          ))}
        </ol>
        <ul className="list-none ml-7">
          <li
            className=" flex items-center justify-center text-2xl md:h-[100px] h-[80px] border border-[#48adff] text-[#48adff] mb-3 md:mr-5 mr-2 rounded-md"
            onClick={increaseQ}
          >
            <FaPlus />
          </li>
        </ul>
      </div>
      <div className="sticky bottom-0 bg-white pb-[20px] pt-3">
        <div className="flex item-center justify-center mb-[10px] ">
          <button
            onClick={searchLibBtn}
            className="forextracss flex items-center justify-center gap-2 px-[8px] py-[4px] w-[80%] bg-[#f7f7f7] text-sm "
          >
            <span>
              <CiSearch />
            </span>
            <p>search library</p>
          </button>
        </div>
        <div className="flex item-center justify-center">
          <button className="forextracss flex items-center justify-center gap-2 px-[8px] py-[4px] w-[80%] bg-[#ab38f3] text-sm text-white">
            <span>
              <FaSave />
            </span>
            <p>Add Questions</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebartoglemenue;

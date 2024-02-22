"use client";
import React from "react";
import "./componentscss.css";
import { FaPlay } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { LeftTogleMenue, previewTogle } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const leftbarTogl = useSelector((store) => store.leftsidetoglemenue);

  return (
    <nav className="flex  items-center justify-between px-[15px] px-md-[25px] py-[10px] forextracss">
      <h1 className="  font-bold text-3xl flex items-center justify-center">
        {" "}
        <span
          className="h1forextracss text-[15px] md:text-[20px] mr-[10px] p-[5px]"
          onClick={() => dispatch(LeftTogleMenue())}
          style={{
            transform: !leftbarTogl ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          <MdOutlineArrowBackIos />
        </span>{" "}
        QUIZIFY
      </h1>
      <div className="flex gap-3 gap-md-5">
        <button className="flex items-center justify-between bg-[#e9e9e9] px-[16px] py-[5px] rounded-[8px] text-sm font-[19px]" onClick={()=>dispatch( previewTogle())}>
          <span className="mr-[5px]">
            <FaPlay />
          </span>{" "}
          Preview
        </button>
        <button className="flex items-center justify-between bg-[#ab38f3] px-[16px] py-[5px] rounded-[8px] text-sm font-[19px] text-white">
          <span className="mr-[5px]">
            <FaSave />
          </span>{" "}
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

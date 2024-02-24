"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { previewTogle } from "../redux/slice";
import StudentQnA from "./StudentQnA";
const Preview = () => {
  const dispatch = useDispatch();
  const data=useSelector((stor)=>stor.obj)
  console.log(data)
  return (
    <div className="w-full h-screen absolute top-0 bg-[#16363d] z-50 ">
      <div className="bg-black flex items-center justify-between py-2 px-1">
        <div className="flex gap-2 items-center">
          <div className="bg-[#888888] text-white rounded-md px-2 py-[3px] text-sm">
            1/4
          </div>
          <div className="bg-[#009ba4] px-1 py-[2px] rounded-md text-sm text-white">
            single Select
          </div>
        </div>

        <div className="bg-[#888888] text-white rounded-md px-2 py-[3px] text-sm">
          Player's view
        </div>
        <div
          className="bg-[#888888] text-white rounded-md px-2 py-2 text-sm"
          onClick={() => dispatch(previewTogle())}
        >
          <RxCross2 />
        </div>
      </div>
      <StudentQnA data={data} />
    </div>
  );
};

export default Preview;

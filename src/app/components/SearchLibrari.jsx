"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { searchLib } from "../redux/slice";
import LibraryCard from "./LibraryCard";
const SearchLibrari = ({ isSmallScreen }) => {
  const [arr,Setarr]=useState([1,2,3,4,5,6,7,8])
  const searchLbr = useSelector((stor) => stor.searchLibrari);
  const dispatch = useDispatch();

  const obj = {
    width: "60%",
    right: searchLbr ? "0" : "-70%",
  };
  const objTwo = {
    width: "90%",
    right: searchLbr ? "0" : "-95%",
  };
  return (
    <div
      className="searchlibright  fixed top-0 w-[60%] bg-white z-50  h-full"
      style={!isSmallScreen ? obj : objTwo}
    >
      <div className="shadow-sm pb-5">
        <div className="flex item-center justify-start pt-3 pl-3">
          <div className="flex items-center justify-center gap-2 border border-[#b9b9b9] rounded-md p-1">
            <input
              type="text"
              placeholder="search quiz"
              className="outline-none border-none text-[12px] w-72"
            />
            <span className="text-[12px] bg-[#f0f0f0] text-[#b8b8b8] rounded-md p-1">
              SEARCE
            </span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 mt-3 pl-3">
          <p className="text-sm">Filtter by:</p>
          <div className="w-[120px]">
            <select
              name="leftselect"
              className="bg-white border border-gray-300 text-gray-900 text-[12px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Grade 1</option>
              <option value="">Grade 2</option>
              <option value="">Grade 3</option>
            </select>
          </div>
          <div className="w-[120px]">
            <select
              name="leftselect"
              className="bg-white border border-gray-300 text-gray-900 text-[12px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Mathematics</option>
              <option value="">Science</option>
              <option value="">Physics</option>
            </select>
          </div>
          <div className="w-[120px]">
            <select
              name="leftselect"
              className="bg-white border border-gray-300 text-gray-900 text-[12px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">1-10</option>
              <option value="">10-20</option>
              <option value="">20-30</option>
            </select>
          </div>
          <div className="w-[120px]">
            <select
              name="leftselect"
              className="bg-white border border-gray-300 text-gray-900 text-[12px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">French</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full ">
        <div className="w-[35%] h-full overflow-y-auto py-3 px-2">
          <p className="text-[12px]">No search query entred</p>

          <div className="forshadowbox rounded-md py-3 px-1 my-3">
            <p className="text-[12px]">Show content from</p>
            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center gap-2">
                <input type="radio" name="options" id="checkbox1" />{" "}
                <label for="checkbox1" className="text-[13px]">
                  community
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="options"
                  id="checkbox2"
                  className=" "
                />{" "}
                <label for="checkbox2" className="text-[13px]">
                  My library
                </label>
              </div>
            </div>
          </div>
          {arr?.map((e)=> <LibraryCard/>)}
         

        </div>

        <div className=" w-[65%] bg-[#f3f3f3] h-full overflow-y-auto">
          <div className="w-[60%] mt-20 m-auto"><h2 className="text-center font-bold  text-2xl text-[#cecece]">Select a quiz to see its preview.</h2></div>
   
        </div>
      </div>



{/* left cross */}
      <div
        onClick={() => dispatch(searchLib())}
        className=" bg-[#fff] shadow-md p-2 rounded-md  absolute -left-5 top-2"
      >
        <RxCross2 />
      </div>
      {/* left cross */}
    </div>
  );
};

export default SearchLibrari;

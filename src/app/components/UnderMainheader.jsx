import React from "react";
import { useDispatch } from "react-redux";
import { ExplAndInpQna } from "../redux/slice";
import { FaRegLightbulb } from "react-icons/fa";
const UnderMainheader = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* upper */}
      <div className="flex items-center justify-between px-3  ">
        <h2>Untitled Quiz</h2>
        <div className="flex gap-2 text-[12px] items-center">
          <input
            type="text"
            placeholder="Add a tag"
            className="h-[50px] w-[80px] shadow-inner px-3"
          />
          <button onClick={() => dispatch(ExplAndInpQna())} className="flex items-center px-[5px]  bg-[#e7e7e7] text-black rounded-md h-6">
            {" "}
            <span>
              <FaRegLightbulb />
            </span>
            <p> Add Explanation</p>
          </button>
        </div>
      </div>
      {/* lower */}
      <div className="flex items-center justify-between px-4 mt-2">
        <div className="w-[160px]">
          <select
            name="leftselect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">single select</option>
            <option value="">single select</option>
            <option value="">single select</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-[100px]">
         
          </div>
          <div className="w-[100px]">
            <select
              name="leftselect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">60 sec</option>
              <option value="">120 sec</option>
              <option value="">300 sec</option>
            </select>
          </div>
          <div className="w-[100px]">
            <select
              name="leftselect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Easy</option>
              <option value="">Hard</option>
              <option value="">Complicated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderMainheader;

"use client";
import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";

import Tiptap from "./Tiptap";

const InputfilledQuestion = () => {
  const [arr, Setarr] = useState([0]);

  const handleIncsearr = () => {
    if (arr.length < 5) {
      Setarr((pre) => [...pre, arr.length + 1]);
    }
  };

  const deleteItem = (itemToDelete) => {
    const updatedItems = arr.filter((item, inde) => inde !== itemToDelete);
    Setarr(updatedItems);
  };
  return (
    <div className="w-full md:w-[70%] m-auto pb-2 mt-4 rounded-md bg-[#521a3c] p-2">
      {/* upper */}
      <Tiptap
        w={"100%"}
        h={"230px"}
        bc={"#521a3c"}
        texsize={"16px"}
        border={"1px solid white"}
        imagsign={true}
        imgContainer={true}
        question={true}
      />

      {/* lowerformultiple */}
      <div className="flex w-full items-center justify-start gap-2 overflow-x-auto">
        {arr?.map((e, i) => (
          <Tiptap
            index={i}
            w={"170px"}
            h={"220px"}
            texsize={"13px"}
            deletBtn={true}
            deleteItem={deleteItem}
            imagsign={false}
            item={e}
            key={i}
            imgContainer={false}
            options={true}
          />
        ))}
        <div onClick={handleIncsearr} className="text-white text-2xl">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default InputfilledQuestion;

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { ExplAndInpQna, getCropedimgForExplanation } from "../redux/slice";
import Tiptap from "./Tiptap";
import Imageset from "./Imageset";
import Image from "next/image";
const InputfilledExplanation = () => {
 
  const [imageUploadComtogle, SetimageUploadComtogle] = useState(false);

  const dispatch = useDispatch(null);
     const getImage=useSelector((stor)=>stor.obj.cropedImgExplanation)
  const handleImageUpload = (acceptedFiles) => {
    if (!acceptedFiles) {
      return;
    }


    dispatch(getCropedimgForExplanation(acceptedFiles))
  };

  const handleImageview = () => {
    SetimageUploadComtogle(!imageUploadComtogle);
  };

  return (
    <div className="w-[99%] rounded-lg bg-[#000] m-auto mt-6">
      <div className="flex items-center justify-between pb-2">
        <button
          onClick={() => dispatch(ExplAndInpQna())}
          className="flex items-center gap-1 py-1 px-2 bg-[#464646] text-white text-[12px] m-3 rounded-md "
        >
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

      <div className="flex flex-col md:flex-row w-full item-center justify-center pb-5 gap-2">
        <div className="flex items-center justify-center border-dotted border-2 border-white w-[28%] aspect-square rounded-lg">
         {getImage? (<Image src={getImage} alt="cropedimage" width={1280} height={720} /> ):(<div
            onClick={() => handleImageview()}
            className="flex flex-col items-center justify-center text-white text-sm gap-2"
          >
            <p>Add Media</p>
            <span className="p-2 bg-[#616161] text-[22px] rounded-lg">
              <CiImageOn />
            </span>
            {imageUploadComtogle ? (
              <div className="bg-overlay absolute left-0 top-0 w-full h-full bg-[#f0f0f0] z-50">
                <Imageset
                  onImageUpload={handleImageUpload}
                  handleImageview={handleImageview}
                />
              </div>
            ) : (
              ""
            )}
          </div>)}
        </div>
        <div className="flex items-center justify-center border-dotted border-2 border-white w-[70%]  rounded-lg">
          <div className="w-full h-[95%]">
            <Tiptap
              w={"100%"}
              h={"100%"}
              bc={"#000000"}
              texsize={"16px"}
              border={""}
              imagsign={false}
              explanation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputfilledExplanation;

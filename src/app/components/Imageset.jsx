import React, { useState } from "react";
import { openEditor } from "react-profile";
import "react-profile/themes/dark";
import { useDropzone } from "react-dropzone";
import { RxCross2 } from "react-icons/rx";
import { CiImageOn } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";

import "react-image-crop/dist/ReactCrop.css";

const Imageset = ({ onImageUpload, handleImageview }) => {
  const [uplodadImg, SetUImg] = useState();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      handleImg(acceptedFiles);
    },
    accept: "image/*",
    multiple: false,
  });

  const handleImg = async (acceptedFiles) => {
    const image = await openEditor({ src: acceptedFiles[0] });
    onImageUpload(image?.editedImage?.getDataURL());

    handleImageview();
  };

  const handleSaveImage = () => {
    handleImageview();
  };

  return (
    <>
      <div className="w-[40%] bg-white rounded-lg m-auto mt-20 pb-8">
        <div
          className="flex items-center justify-end py-2 px-3"
          onClick={() => handleImageview()}
        >
          <RxCross2 />
        </div>
        <div className="w-full px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center  w-[40px]  h-[40px] rounded-full bg-[#00bbd2] text-[#e3fa57] text-[27px] ">
              <CiImageOn />
            </div>
            <div>
              <h2 className="font-bold text-xl">Add image</h2>
              <p className="text-[12px]">
                Use ctr + V to paste image from your clipboard
              </p>
            </div>
          </div>
          {!uplodadImg ? (
            <div
              {...getRootProps()}
              style={{
                border: isDragActive ? "2px dashed blue" : "2px dashed blue",
                borderRadius: "5px",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              <input {...getInputProps()} />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[28px] text-[#0054bd]">
                    <BiImageAdd />
                  </span>
                  <p className="text-[12px]">
                    Drag & Drop or Click to Upload an Image
                  </p>
                </div>
                <div>
                  <p className="text-sm">JPG,JPGE,PNG</p>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ width: "100%", height: 400, marginTop: 20 }}></div>
          )}
          <div
            onClick={handleSaveImage}
            className="w-full py-3 flex items-center justify-center bg-gradient-to-r from-[#00d1bf] to-[#009489] rounded-lg mt-4 text-white"
          >
            insert
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageset;

"use client";
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";

import {
  MdDelete,
  MdFormatBold,
  MdFormatUnderlined,
  MdOutlineFormatColorText,
  MdCheckCircle,
} from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { FaItalic } from "react-icons/fa6";
import { LuSigma, LuSubscript, LuSuperscript } from "react-icons/lu";
import { AiOutlineStrikethrough } from "react-icons/ai";

import { GrGallery } from "react-icons/gr";
import Image from "next/image";
import Imageset from "./Imageset";
import { useDispatch, useSelector } from "react-redux";
import { arrForOptions, getCropedimgForQna, textForExpFunction, textForQnaFunction } from "../redux/slice";

const extensions = [
  StarterKit,
  TextStyle,
  Color,
  Underline,
  Superscript,
  Subscript,
];
const content = ``;

const Tiptap = ({
  index,
  w,
  h,
  bc,
  texsize,
  border,
  deletBtn,
  deleteItem,
  item,
  imagsign,
  imgContainer,
  options,
  explanation,
  question
}) => {
  const [bGcolo, SetbGcolo] = useState("#092faa");
  const [con, Setcon] = useState(imagsign);
  const [imageUploadComtogle, SetimageUploadComtogle] = useState(false);
  // const [image, setImage] = useState(null);

  const dispatch = useDispatch(null);
  const image = useSelector((stor) => stor.obj.cropedImgForQnA);
  const handleImageUpload = (acceptedFiles) => {
    if (!acceptedFiles) {
      return;
    }

    dispatch(getCropedimgForQna(acceptedFiles));
  };

  const editor = useEditor({
    extensions,
    content,
  });

const haldleGetText=()=>{
  const html=editor.getHTML()
 
  if(options){
    dispatch(arrForOptions(html))
  }else if(explanation){
    
    dispatch(textForExpFunction(html))
  }else if(question){
    dispatch(textForQnaFunction(html))
  }
}

  const handleImageview = () => {
    SetimageUploadComtogle(!imageUploadComtogle);
  };

  useEffect(() => {
    if (image) {
      Setcon(false);
    } else {
      Setcon(true);
    }

    if (item) {
      if (item === 1) {
        SetbGcolo("#0c6ca8");
      } else if (item == 2) {
        SetbGcolo("#a8a50c");
      } else if (item == 3) {
        SetbGcolo("#009ba4");
      } else if (item == 4) {
        SetbGcolo("#00a480");
      } else if (item == 5) {
        SetbGcolo("#49aa09");
      }
    }
  }, [item, image, imagsign]);

  const deletfromarray = () => {
    deleteItem(index);
  };

  const styobj = {
    width: w,
    height: h,
    backgroundColor: bc || bGcolo,
    border: border,
  };

  if (!editor) {
    return null;
  }
  return (
    <>
      <div className=" flex flex-wrap ">
        {imgContainer && (
          <div
            style={{ width: image ? "30%" : "0px" }}
            className="flex items-center justify-center overflow-hidden "
          >
            {image && (
              <Image src={image} alt="uploded" width={260} height={10} />
            )}
          </div>
        )}
        <div style={{ width: image ? "70%" : "100%" }}>
          <div style={styobj} className="rounded-lg mb-2 pt-1 text-white">
            <div
              style={{ fontSize: texsize }}
              className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-3 px-3"
            >
              <input
                className="hidden"
                id="radioB"
                type="color"
                onInput={(event) =>
                  editor.chain().focus().setColor(event.target.value).run()
                }
                value={editor.getAttributes("textStyle").color}
                data-testid="setColor"
              />
              <label for="radioB">
                <MdOutlineFormatColorText />
              </label>
              <span
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
              >
                <MdFormatBold />
              </span>
              <span
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
              >
                <FaItalic />
              </span>
              <span
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive("underline") ? "is-active" : ""}
              >
                <MdFormatUnderlined />
              </span>
              <span
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
              >
                <AiOutlineStrikethrough />
              </span>
              <span
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive("code") ? "is-active" : ""}
              >
                <IoCodeSlash />
              </span>
              {deletBtn ? (
                <span onClick={deletfromarray}>
                  <MdDelete />
                </span>
              ) : (
                ""
              )}
              <span
                onClick={() => editor.chain().focus().toggleSubscript().run()}
                className={editor.isActive("subscript") ? "is-active" : ""}
              >
                <LuSubscript />
              </span>
              <span
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
                className={editor.isActive("superscript") ? "is-active" : ""}
              >
                <LuSuperscript />
              </span>
              <span>
                <LuSigma />
              </span>

              {imagsign && con ? (
                <span onClick={() => handleImageview()}>
                  <GrGallery />
                </span>
              ) : (
                ""
              )}
              {
                <span onClick={haldleGetText} className="text-[22px] text-[#55b448]">
                  <MdCheckCircle />
                </span>
              }
            </div>
            <div className="p-2">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Tiptap;

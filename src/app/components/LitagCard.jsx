import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
const LitagCard = ({ data }) => {
  console.log(data.cropedImgForQnA);

  return (
    <li className=" flex items-center justify-center md:h-[100px] overflow-hidden h-[80px] border border-[#48adff] mb-3 md:mr-5 mr-2 rounded-md">
      {" "}
      <Image
        src={data.cropedImgForQnA ? data.cropedImgForQnA : ""}
        alt="img"
        width={200}
        height={100}
      />
    </li>
  );
};

export default LitagCard;

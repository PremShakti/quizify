import React from "react";
import parse from "html-react-parser";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const StudentQnA = ({ data }) => {
  console.log(data.textForQna, data.textForExplanation, data.arrForOptions);

  return (
    <div className="w-full md:w-[50%] m-auto bg-[#152f35] rounded-2xl p-3 mt-4">
      <div className="text-white pl-7">{parse(data.textForQna)}</div>
      <ul className="list-disc list-inside pt-5">
        {data.arrForOptions?.map((e, i) => (
          <li
            key={i}
            className="list-item list-alphabetic w-[95%] md:w-[70%] m-auto mb-3 text-[#152f35] bg-white rounded-md p-2  text-sm font-bold"
          >
            {parse(e)}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <span className="text-white bg-[#0e2327] hover:bg-[#3a3a3a] p-[1px] rounded-md text-[25px]">
            <IoMdArrowDropleft />
          </span>
          <span className="text-white bg-[#0e2327] hover:bg-[#3a3a3a] p-[1px] rounded-md text-[25px]">
            <IoMdArrowDropright />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentQnA;

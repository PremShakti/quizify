"use client";
import React, { useEffect, useState } from "react";
import Sidebartoglemenue from "./Sidebartoglemenue";
import { useScreenSize } from "../Hooks/useScreenSize";
import { useSelector } from "react-redux";
import UnderMainheader from "./UnderMainheader";
import InputfilledQuestion from "./InputfilledQuestion";
import InputfilledExplanation from "./InputfilledExplanation";
import Preview from "./Preview";
import SearchLibrari from "./SearchLibrari";

const Main = () => {
  const [condition, Setcondition] = useState(false);
  const leftmenueTogl = useSelector((stor) => stor.leftsidetoglemenue);
  const previewTogleBtn = useSelector((stor) => stor.preview);
  const ExplanationAndInpQna = useSelector((stor) => stor.explanationAndInpQna);
  const { isSmallScreen } = useScreenSize();
  // console.log(isSmallScreen)

  useEffect(() => {
    console.log(isSmallScreen);
  }, [isSmallScreen]);

  let obj = {
    marginLeft: "0px",
  };
  let objTow = {
    marginLeft: leftmenueTogl ? "20%" : "0px",
  };
  return (
    <div className="flex">
      <Sidebartoglemenue />
      <div className="mainDiv w-full" style={isSmallScreen ? obj : objTow}>
        <UnderMainheader />
        {ExplanationAndInpQna ? (
          <InputfilledExplanation />
        ) : (
          <InputfilledQuestion />
        )}
      </div>
      {previewTogleBtn ? <Preview /> : null}
      <SearchLibrari isSmallScreen={isSmallScreen} />
    </div>
  );
};

export default Main;

import React from "react";
import ComEngageChip from "./ComEngageChip";
import BenefitsCircle from "./BenefitsCircle";
import communityImage from "../images/communityengagement.png";

const LoadingItems = (props: any) => {
  return (
    <div className="flex flex-col-reverse md:flex-row p-16 gap-10 animate-pulse h-full w-full">
      <div className="w-3/3 md:w-1/3 h-48 rounded-md bg-slate-500" />
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col md:w-96">
          <div className="rockwell text-xl w-8/12 h-6 bg-slate-500 rounded-md"></div>
          <div className=""></div>
          <br></br>
          <div className="w-full h-12 bg-slate-500 rounded-md">
            {props.description}
          </div>
        </div>
        <div className="">
          <div className="w-3/3 h-12 rounded-md bg-slate-500" />
          <br></br>
          <div className="h-12 w-12 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingItems;

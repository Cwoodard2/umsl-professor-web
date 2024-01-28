import React from "react";
import ComEngageChip from "./ComEngageChip";
import BenefitsCircle from "./BenefitsCircle";
import communityImage from "../images/communityengagement.png";


const ComEngage = (props: any) => {
  const benefitsArray = props.benefits.map((benefit: string, index: number) => (
    <BenefitsCircle benefit={benefit} num={index} />
  ));
  const chipArray = props.chips.map((chip: string) => (
    <ComEngageChip name={chip} />
  ));
  return (
    <div className="flex flex-col gap-10 animate-inOut items-center border-webGreen border rounded-lg max-w-md">
      <img
        src={props.image}
        className="w-3/3 h-3/5 md:w-12/12 md:h-auto rounded-md shadow-lg object-contain"
        alt="Community Engagement Picture"
      />
      <div className="flex flex-row gap-2">{chipArray}</div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col">
          <h3 className="rockwell text-2xl md:text-3xl text-center">{props.title}</h3>
          <br></br>
          <p className="text-center">{props.description}</p>
        </div>
        <br></br>
        {benefitsArray && <div className="flex flex-col items-center">
          <h4 className="rockwell text-lg">Benefits</h4>
          <div className="flex flex-row gap-10">{benefitsArray}</div>
        </div>}
      </div>
    </div>
  );
};

export default ComEngage;

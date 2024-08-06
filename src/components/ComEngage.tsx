import React from "react";
import ComEngageChip from "./ComEngageChip";
import BenefitsCircle from "./BenefitsCircle";
import BenefitsCard from "./BenefitsCard";
import communityImage from "../images/communityengagement.png";


const ComEngage = (props: any) => {
  const benefitsArray = props.benefits.map((benefit: string, index: number) => (
    <BenefitsCard benefit={benefit} num={index + 1} />
  ));
  const chipArray = props.chips.map((chip: string) => (
    <ComEngageChip name={chip} />
  ));
  return (
    <div className="flex flex-col md:flex-row gap-10 animate-inOut rounded-lg">
      <img
        src={props.image}
        className="w-3/3 max-h-64 md:w-12/12 md:h-auto rounded-md shadow-lg"
        alt="Community Engagement Picture"
      />
      <div className="flex flex-col gap-3 items-center md:items-start">
        <div className="flex flex-col">
          <h3 className="rockwell text-2xl md:text-3xl text-center md:text-left">{props.title}</h3>
          <div className="flex flex-row gap-2 justify-center md:justify-start">{chipArray}</div>
          <br></br>
          <p className="text-center md:text-left">{props.description}</p>
        </div>
        <br></br>
        {benefitsArray && <div className="flex flex-col">
          <h4 className="rockwell text-xl">Benefits</h4>
          <div className="flex flex-row gap-10 justify-center md:justify-start">{benefitsArray}</div>
        </div>}
      </div>
    </div>
  );
};

export default ComEngage;

// return (
//   <div className="flex flex-col gap-10 animate-inOut items-center border-webGreen border rounded-lg max-w-md">
//     <img
//       src={props.image}
//       className="w-3/3 max-h-64 md:w-12/12 md:h-auto rounded-md shadow-lg"
//       alt="Community Engagement Picture"
//     />
//     <div className="flex flex-row gap-2 ">{chipArray}</div>
//     <div className="flex flex-col gap-3 items-center">
//       <div className="flex flex-col p-16 md:px-12 md:py-16">
//         <h3 className="rockwell text-2xl md:text-3xl text-center">{props.title}</h3>
//         <br></br>
//         <p className="text-center">{props.description}</p>
//       </div>
//       <br></br>
//       {benefitsArray && <div className="flex flex-col items-center">
//         <h4 className="rockwell text-lg">Benefits</h4>
//         <div className="flex flex-row gap-10">{benefitsArray}</div>
//       </div>}
//     </div>
//   </div>
// );
// };

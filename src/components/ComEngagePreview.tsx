import React from "react";
import ComEngageChip from "./ComEngageChip";
import BenefitsCircle from "./BenefitsCircle";
import communityImage from "../images/communityengagement.png";

const ComEngagePreview = (props: any) => {
  const benefitsArray = props.benefits.map((benefit: string, index: number) => (
    <BenefitsCircle benefit={benefit} num={index} />
  ));
  const chipArray = props.chips.map((chip: string) => (
    <ComEngageChip name={chip} />
  ));
  return (
    <div
      className="flex flex-col-reverse p-4 gap-10 hover:bg-slate-400 transition-all"
      onClick={() =>
        props.updater({
          benefits: props.benefits,
          chips: props.chips,
          title: props.title,
          description: props.description,
          img: props.imgFile,
          orgLink: props.orgLink,
        })
      }
    >
      <img
        src={props.image}
        className="w-3/3 h-3/5 md:w-1/3 md:h-3/5 rounded-md shadow-lg object-cover"
        alt="Placeholder alt text"
      />
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col">
          <h3 className="rockwell text-xl">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ComEngagePreview;

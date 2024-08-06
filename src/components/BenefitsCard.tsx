import React from "react";

const BenefitsCard = (props: any) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <h3 className="text-md"><strong>{props.num}</strong></h3>
      </div>
      <h3>{props.benefit}</h3>
    </div>
  );
};

export default BenefitsCard;

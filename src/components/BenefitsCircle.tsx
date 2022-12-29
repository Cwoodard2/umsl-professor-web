import React from "react";

const BenefitsCircle = (props: any) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-12 h-12 bg-webGreen"></div>
            <h3>{props.benefit}</h3>
        </div>
    );
};

export default BenefitsCircle;
import React from "react";
import ComEngageChip from "./ComEngageChip";
import BenefitsCircle from "./BenefitsCircle";
import communityImage from '../images/communityengagement.png';

const ComEngage = (props: any) => {
    return (
        <div className="flex flex-col-reverse md:flex-row p-16 gap-10">
            <img src={communityImage} className="w-3/3 h-3/5 md:w-1/3 md:h-3/5 rounded-md shadow-lg object-cover" alt="Placeholder alt text"/>
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="rockwell text-xl">{props.title}</h3>
                    <div>
                        <ComEngageChip name="Housing"/>
                    </div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <h4 className="rockwell text-lg">Benefits</h4>
                    <div className="flex flex-row gap-10">
                        <BenefitsCircle benefit="Better Housing"/>
                        <BenefitsCircle benefit="Healthier Lives"/>
                        <BenefitsCircle benefit="Cleaner Air"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComEngage;
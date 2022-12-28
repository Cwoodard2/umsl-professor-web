import React from "react";
import communityImage from '../images/communityengagement.png';

const ComEngage = (props: any) => {
    return (
        <div className="flex flex-row p-16 gap-10">
            <img src={communityImage} className="w-1/3 h-3/5 rounded-md shadow-lg object-cover" alt="Placeholder alt text"/>
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="rockwell text-xl">{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <h4 className="rockwell text-lg">Benefits</h4>
                    <div className="flex flex-row gap-10">
                        <div className="rounded-full w-12 h-12 bg-webGreen"></div>
                        <div className="rounded-full w-12 h-12 bg-webGreen"></div>
                        <div className="rounded-full w-12 h-12 bg-webGreen"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComEngage;
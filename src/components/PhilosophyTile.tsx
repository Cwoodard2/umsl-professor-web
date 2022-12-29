import React from "react";

const PhilosophyTile = (props: any) => {
    return (
        <div className="border-webBlue border-2 w-1/4 flex flex-col justify-start items-center p-1 rounded-md">
            <div className="bg-webGreen rounded-full w-12 h-12 rockwell flex justify-center items-center text-white text-3xl">{props.number}</div>
            <h3 className="rockwell text-xl">{props.philosophy}</h3>
            <p>{props.philDescript}</p>
        </div>
    );
};

export default PhilosophyTile;
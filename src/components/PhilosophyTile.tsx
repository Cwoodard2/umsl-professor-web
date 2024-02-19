import React from "react";

const PhilosophyTile = (props: any) => {
  return (
    <div className="border-webBlue border-2 md:w-2/5 flex flex-col justify-center md:justify-start items-center p-3 rounded-md gap-2">
      <div className="bg-webGreen rounded-full w-12 h-12 rockwell flex flex-row justify-center items-center text-white text-3xl pt-3">
        {props.number}
      </div>
      <h3 className="rockwell text-xl text-center">{props.philosophy}</h3>
      <p className="text-center">{props.philDescript}</p>
    </div>
  );
};

export default PhilosophyTile;

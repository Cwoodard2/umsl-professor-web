import React from "react";

const LoadingClasses = (props: any) => {
  return (
      <div className="flex flex-col w-56 sm:w-6/12 md:w-4/12 bg-slate-500 rounded-md transition-all p-4 flex-shrink-0 gap-2 animate-pulse">
      <div
        className="w-full rounded-md shadow-md object-cover aspect-square bg-slate-700"     
      ></div>
      <div className="rockwell text-white text-xl">{props.class}</div>
      <div
        className="bg-slate-700 p-4 w-full rounded-md transition-all"
      >
      </div>
    </div>   
  );
};

export default LoadingClasses;

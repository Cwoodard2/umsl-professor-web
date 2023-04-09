import React from "react";

const LoadingItems = (props: any) => {
  return (
    <div className="flex flex-col-reverse md:flex-row p-16 gap-10 animate-pulse h-full w-full">
      <div
        className="w-3/3 md:w-1/3 h-48 rounded-md bg-slate-500"
      />
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="rockwell text-xl w-8/12 h-6 bg-slate-500 rounded-md"></div>
          <div className="rockwell text-xl w-full h-12 bg-slate-500 rounded-md"></div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="h-6 w-12 bg-slate-500 rounded-md p-2"></div>
          <div className="h-6 w-12 bg-slate-500 rounded-md p-2"></div>
          <div className="h-6 w-12 bg-slate-500 rounded-md p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingItems;

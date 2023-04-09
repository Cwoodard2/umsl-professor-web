import React from "react";

const ComEngageChip = (props: any) => {
  return (
    <>
      <button className="border-webGreen border-2 rounded-full text-webGreen pl-1 pr-1 text-sm">
        {props.name}
      </button>
    </>
  );
};

export default ComEngageChip;

import React from "react";

const ComEngageChip = (props: any) => {
  return (
    <>
      <div className="border-webBlue border-2 rounded-full text-webBlue px-2 text-sm font-bold">
        {props.name}
      </div>
    </>
  );
};

export default ComEngageChip;

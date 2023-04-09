import React from "react";

const ComEngageChip = (props: any) => {
  return (
    <>
      <div className="border-webBlue border-2 rounded-full text-webBlue pl-1 pr-1 text-sm">
        {props.name}
      </div>
    </>
  );
};

export default ComEngageChip;

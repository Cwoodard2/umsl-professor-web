import React, { useState } from "react";

const ComEngageFilter = (props: any) => {
  const [isActive, SetIsActive] = useState(false);


  const handleFilter = (tag: string) => {
    SetIsActive(!isActive);
    props.filter(tag);
  };

  const handleActive = () => {
    if (isActive) {
      return "bg-webGreen bg-opacity-10"
    }
  };

  return (
    <div className="pl-16 scroll-mt-10" id="filter">
      <div className=" text-black w-1/5 rounded-md p-1 flex flex-row gap-1">
        {props.tags.map((tag: string) => (
          <button onClick={() => handleFilter(tag)} className={`border rounded-full px-1 border-webGreen ${handleActive()}`}>{tag}</button>
        ))}
      </div>
    </div>
  );
};

export default ComEngageFilter;

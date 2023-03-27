import React from "react";

const ComEngageFilter = (props: any) => {
  const handleFilter = (filter: string) => {
    return props.tags.filter((tag: string) => tag === filter);
  };

  return (
    <div className="pl-16 scroll-mt-10" id="filter">
      <div className="bg-webBlue text-white w-1/5 rounded-md p-1">
        {props.tags.map((tag: string) => (
          <button>{tag}</button>
        ))}
      </div>
    </div>
  );
};

export default ComEngageFilter;

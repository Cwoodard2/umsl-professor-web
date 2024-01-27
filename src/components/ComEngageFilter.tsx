import React, { useState } from "react";
import SearchBar from "./Searchbar";

const ComEngageFilter = (props: any) => {
  const [isActive, SetIsActive] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (tag: string) => {
    SetIsActive(!isActive);
    props.filter(tag);
  };

  const handleActive = () => {
    if (isActive) {
      return "bg-webGreen bg-opacity-10";
    }
  };

  return (
    <>
      <div
        className="w-[10%] ml-16 px-2 py-1 rounded-sm scroll-mt-10 border border-black flex flex-row justify-between"
        id="filter"
        onClick={() => setShowFilters(!showFilters)}
      >
        <p>Filter</p>
        <div className="w-6 h-6 bg-webGreen rounded-full"></div>
        {/* <div className=" text-black w-1/5 rounded-md p-1 flex flex-row gap-1">
        {props.tags.map((tag: string) => (
          <button onClick={() => handleFilter(tag)} className={`border rounded-full px-1 border-webGreen ${handleActive()}`}>{tag}</button>
        ))}
      </div> */}
      </div>
      <br></br>
      {showFilters && (
        <div
          className="ml-16 px-4 py-1 rounded-sm scroll-mt-10 border border-black flex flex-col gap-1 justify-between max-w-fit"
          id="filter"
        >
          <SearchBar />
          <div></div>
          <div>
            <div className=" text-black w-1/5 rounded-md p-1 flex flex-row gap-1">
              {props.tags.map((tag: string) => (
                <button
                  onClick={() => handleFilter(tag)}
                  className={`border rounded-full px-1 border-webGreen ${handleActive()}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComEngageFilter;

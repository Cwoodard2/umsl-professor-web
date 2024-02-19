import React, { useState } from "react";
import SearchBar from "./Searchbar";

const ComEngageFilterNew = (props: any) => {
  const [isActive, SetIsActive] = useState(false);
  const [showFilters, setShowFilters] = useState<string []>([]);

  const handleFilter = (tag: string) => {
    const index: number = showFilters.indexOf(tag);
    let newFilters: string[] = showFilters;
    console.log(index);
    console.log(tag);
    if (index === -1) {
      console.log("here");
      newFilters.push(tag);
    } else {
      newFilters.splice(index, 1);
    }
    console.log(newFilters);
    // SetIsActive(!isActive);
    setShowFilters(newFilters);
    props.filter(newFilters);
  };

  const handleActive = (tag: string) => {
    if (showFilters.includes(tag)) {
      return "bg-webGreen bg-opacity-10";
    }
    // if (isActive) {
    //   return "bg-webGreen bg-opacity-10";
    // }
  };

  return (
    <>
        <div
          className="flex flex-col gap-4 items-center"
          id="filter"
        >
          {/* <SearchBar /> */}
          <div></div>
          <div>
            <div className=" text-black w-1/5 rounded-md p-1 flex flex-row gap-1">
              {props.tags.map((tag: string) => (
                <button
                  onClick={() => handleFilter(tag)}
                  className={`border rounded-full px-1 border-webGreen ${handleActive(tag)} hover:bg-webGreen hover:bg-opacity-10 transition-all`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default ComEngageFilterNew;

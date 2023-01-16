import React from "react";

const SearchBar = (props: any) => {
  let filterArray = [];

  const handleChange = () => {
    props.filter("article 1");
    return;
  };

  return (
    <>
      <input
        placeholder="Type Here to search"
        className="bg-white border-webGreen border-2 rounded-full shadow-lg p-2"
      ></input>
      <button onClick={() => handleChange()}></button>
    </>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = (props: any) => {
  let filterArray = [];

  const handleChange = (e: any) => {
    const filter = document.getElementById("searchbar") as HTMLInputElement || null;
    props.filter(e.target.value);
    // filter.value = "";
    return;
  };

  return (
    <>
      <input
        id="searchbar"
        placeholder="Type Here to search"
        className="bg-white border-webGreen border-2 rounded-full shadow-lg p-2"
        onChange={(e) => handleChange(e)}
      ></input>
      <button onClick={(e) => handleChange(e)}>Search</button>
    </>
  );
};

export default SearchBar;

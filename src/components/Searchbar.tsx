import React from "react";

const SearchBar = (props: any) => {
  let filterArray = [];

  const handleChange = () => {
    const filter = document.getElementById("searchbar") as HTMLInputElement || null;
    props.filter(filter.value);
    filter.value = "";
    return;
  };

  return (
    <>
      <input
        id="searchbar"
        placeholder="Type Here to search"
        className="bg-white border-webGreen border-2 rounded-full shadow-lg p-2"
      ></input>
      <button onClick={() => handleChange()}>Search</button>
    </>
  );
};

export default SearchBar;

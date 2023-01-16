import React from "react";
import StandardPage from "../components/StandardPage";
import elainaImage from "../images/johnswolfe_2021.jpeg";

const MappingAbortion = () => {
  return (
    <StandardPage>
      <div className="w-screen h-screen flex flex-col md:flex-row justify-around items-start bg-white p-16 gap-10">
        <div className="flex flex-col">
          <h1 className="text-webGreen rockwell text-4xl">Mapping Abortion</h1>
          <p className="text-black">This is some text</p>
        </div>
        <img
          src={elainaImage}
          className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
      </div>
    </StandardPage>
  );
};

export default MappingAbortion;

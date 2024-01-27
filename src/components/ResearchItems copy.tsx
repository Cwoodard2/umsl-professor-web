import React from "react";
import researchImage from "../images/research2.jpeg";

const ResearchItemsCopy = (props: any) => {
  const authors = props.authors.map((author: any, index: any) => <li key={index}>{author}{index == (props.authors.length - 1) ? "" : ","}</li>);
  return (
    <div className="flex flex-col gap-10 break-words animate-inOut items-center max-w-md border-webGreen border rounded-lg">
      <img
        src={props.image}
        className="w-3/3 h-3/5 md:w-12/12 md:h-auto rounded-md shadow-lg object-contain"
        alt="Placeholder alt text"
      />
      <div className="flex flex-col gap-5 p-16 md:px-12 md:py-16">
        <div>
          <h3 className="rockwell text-2xl md:text-3xl">{props.articleTitle}</h3>
          <p>{props.abstract}</p>
          <br></br>
          <ul className="flex flex-row gap-2 list-none">{authors}</ul>
          <ul className="list-none flex flex-row"><li><div className="h-2 w-2 bg-webGreen rounded-full"></div></li><li><div className="h-2 w-2 bg-webGreen rounded-full border-white border-2"></div></li><li><div className="h-2 w-2 bg-webGreen rounded-full border-white border-2 "></div></li></ul>
        </div>
        <div className="flex flex-row gap-5">
          <a href={props.articleLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white border-webGreen border-2 rounded-md pl-2 pr-2 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold pt-0">
              View Article &rsaquo;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchItemsCopy;

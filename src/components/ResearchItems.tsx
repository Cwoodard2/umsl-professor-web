import React from "react";
import researchImage from "../images/research2.jpeg";

const ResearchItems = (props: any) => {
  console.log(props.authors);
  const authors = props.authors.map((author: any) => <li>{author}</li>);
  return (
    <div className="flex flex-col-reverse md:flex-row p-16 gap-10 break-words">
      <img
        src={props.image}
        className="w-3/3 h-max md:w-1/3 rounded-md shadow-lg object-cover"
        alt="Placeholder alt text"
      />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="rockwell text-xl">{props.articleTitle}</h3>
          <p>{props.abstract}</p>
          <ul className="list-none flex flex-row gap-2">{authors}</ul>
        </div>
        <div className="flex flex-row gap-5">
          <a href={props.articleLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white border-webGreen border-2 rounded-md pl-2 pr-2 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold pt-0">
              PDF
            </button>
          </a>
          <button className="bg-white border-webGreen border-2 rounded-md pl-2 pr-2 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold">
            CITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchItems;

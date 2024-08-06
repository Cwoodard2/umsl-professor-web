import React from "react";
import researchImage from "../images/research2.jpeg";


const ResearchItems = (props: any) => {
  console.log(props.image);
  const authors = props.authors.map((author: any, index: any) => {
    let followingPunctuation: string;
    if (index === (props.authors.length - 2)) {
      if (props.authors.length == 2) {
        followingPunctuation = " and";
      } else {
        followingPunctuation = ", and";
      }
    } else if (index === (props.authors.length - 1)) {
      followingPunctuation = ""
    } else {
      followingPunctuation = ","
    }
  return <li key={index}>{author}{followingPunctuation}</li>
});
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20 break-words animate-inOut">
      <img
        src={props.image}
        className="w-3/3 h-max md:w-1/3 rounded-md shadow-lg object-cover"
        alt="Placeholder alt text"
      />
      <div className="flex flex-col gap-5 items-center md:items-start">
        <div>
          <h3 className="rockwell text-2xl md:text-3xl">{props.articleTitle}</h3>
          <ul className="flex flex-row gap-2 list-none">{authors}</ul>
          <br></br>
          <p>{props.abstract}</p>
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

export default ResearchItems;

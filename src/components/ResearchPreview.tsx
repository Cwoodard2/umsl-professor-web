import React from "react";
import researchImage from "../images/research2.jpeg";

const ResearchPreview = (props: any) => {
  return (
    <div className="flex flex-row md:flex-col-reverse p-4 gap-10 hover:bg-slate-400 rounded transition-all" onClick={() => props.updater(props.authors, props.articleTitle, props.abstract)}>
      <img
        src={props.image}
        className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-lg object-cover"
        alt="Placeholder alt text"
      />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="rockwell text-xl">{props.articleTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResearchPreview;

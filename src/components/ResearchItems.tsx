import React from "react";
import researchImage from "../images/research2.jpeg";

const ResearchItems = (props: any) => {
    return (
        <div className="flex flex-row p-16 gap-10">
            <img src={researchImage} className="w-1/3 h-3/5 rounded-md shadow-lg object-cover" alt="Placeholder alt text"/>
            <div className="flex flex-col">
                <h3 className="rockwell text-xl">{props.articleTitle}</h3>
                <p>{props.abstract}</p>
                <div className="flex flex-row gap-10">
                    <button className="bg-white border-webGreen border-2 rounded-md pl-2 pr-2 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold pt-0">PDF</button>
                    <button className="bg-white border-webGreen border-2 rounded-md p-1 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold">DOI</button>
                    <button className="bg-white border-webGreen border-2 rounded-md p-1 text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold">CITE</button>
                </div>
            </div>
        </div>
    );
};

export default ResearchItems;
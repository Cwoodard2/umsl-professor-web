import React from "react";

const ExperiencePart = (props: any) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img></img>
            <h5>{props.degree}</h5>
            <p>{props.school}</p>
            <p>{props.year}</p>
        </div>
    );
};

export default ExperiencePart;
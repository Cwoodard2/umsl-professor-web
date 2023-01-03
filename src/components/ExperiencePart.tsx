import React from "react";
import ballLogo from '../images/ball-state-cardinals-01-logo-png-transparent.png';
import umsl from '../images/umsl.png';
import UoC from "../images/university_of_cincinnati-logo.png";

const ExperiencePart = (props: any) => {
    let imageToShow;
    let school: string = props.school;

    if (props.school == "Ball State University") {
        imageToShow = <img src={ballLogo} className="md:w-1/3 md:h-3/5 rounded-md object-cover"></img>
    } else if (props.school == "University of Cincinatti") {
        imageToShow = <img src={UoC} className="md:w-2/3 md:h-3/5 rounded-md object-cover"></img>
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {imageToShow}
            <h5>{props.degree}</h5>
            <p>{props.school}</p>
            <p>{props.year}</p>
        </div>
    );
};

export default ExperiencePart;
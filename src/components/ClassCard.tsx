import React from "react";
import teachingImage from '../images/dr-heng-moss_classroom.jpg';

const ClassCard = (props: any) => {
    return (
        <div className="flex flex-col w-1/5 h-96 bg-webGreen rounded-md hover:cursor-pointer hover:shadow-lg hover:shadow-black transition-all">
            <img src={teachingImage} className="w-5/5 h-80 rounded-md shadow-md object-cover"></img>
            <h4 className="rockwell text-white text-xl">{props.class}</h4>
            <p className="text-white">{props.whenTaught}</p>
        </div>
    );
};

export default ClassCard;
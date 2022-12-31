import React from "react";
import PhilosophyTile from "./PhilosophyTile";

const TeachingSection = (props: any) => {
    return (
       <div className="pl-16 pr-16">
        <h2 className="rockwell text-2xl">{props.title}</h2>
        <div className="w-12 h-1 bg-webGreen rounded-sm"></div>
        <p>This is placeholder text</p>
        {props.style && <div className="flex flex-row justify-around">
            <PhilosophyTile number="1" philDescript="Description of your philsophy 1" philosophy="Student Led Teaching"/>
            <PhilosophyTile number="2" philDescript="Description of your philsophy 2" philosophy="Learning By Working"/>
            <PhilosophyTile number="3" philDescript="Description of your philsophy 3" philosophy="Letting You Be heard"/>
        </div>}
        {!props.style && <div className="flex flex-row">
            <p>Testing this</p>
        </div>}
       </div>
    );
};

export default TeachingSection;
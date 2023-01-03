import React from "react";
import PhilosophyTile from "./PhilosophyTile";
import ExperiencePart from "./ExperiencePart";

const TeachingSection = (props: any) => {
    return (
       <div className="pl-16 pr-16" id={props.title}>
        <h2 className="rockwell text-2xl">{props.title}</h2>
        <div className="w-12 h-1 bg-webGreen rounded-sm"></div>
        <p>This is placeholder text</p>
        <br></br>
        {props.style && <div className="flex md:flex-row flex-col gap-5 md:justify-around">
            <PhilosophyTile number="1" philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
" philosophy="Student Led Teaching"/>
            <PhilosophyTile number="2" philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
" philosophy="Learning By Working"/>
            <PhilosophyTile number="3" philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
" philosophy="Letting You Be heard"/>
        </div>}
        {!props.style && <div className="flex flex-col">
            <h4 className="rockwell text-xl">Education</h4>
            <br></br>
            <div className="flex flex-col md:flex-row justify-around gap-5">
                <ExperiencePart degree="BS in Sociology" school="Ball State University" year="2011"/>
                <ExperiencePart degree="MS in Sociology" school="Ball State University" year="2014"/>
                <ExperiencePart degree="PhD in Sociology" school="University of Cincinatti" year="2020"/>
            </div>
        </div>}
       </div>
    );
};

export default TeachingSection;
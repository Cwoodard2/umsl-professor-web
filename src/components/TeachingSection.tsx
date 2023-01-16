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
      <div className="flex md:flex-row flex-col gap-5 md:justify-around">
        <PhilosophyTile
          number="1"
          philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
          philosophy="Student Led Teaching"
        />
        <PhilosophyTile
          number="2"
          philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
          philosophy="Learning By Working"
        />
        <PhilosophyTile
          number="3"
          philDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
"
          philosophy="Letting You Be heard"
        />
      </div>
    </div>
  );
};

export default TeachingSection;

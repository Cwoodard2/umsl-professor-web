import React from "react";
import PhilosophyTile from "./PhilosophyTile";
import ExperiencePart from "./ExperiencePart";

const TeachingSection = (props: any) => {
  return (
    <div className="px-8 md:px-16" id={props.title}>
      <h2 className="rockwell text-3xl">{props.title}</h2>
      <div className="w-12 h-1 bg-webGreen rounded-sm"></div>
      <br></br>
      <p>My teaching philosophy is guided by the conviction that the classroom should be a critical learning environment where students develop a comprehensive understanding of the sociological theories and methods through which we learn about the social world, but also as a place to grow personally and professionally. I appreciate the unique opportunity I have to encourage a learning process where students are not only receptacles of knowledge, but also bring a range of life experiences and perspectives to the classroom from which we can also learn from a sociological grounding. To accomplish these goals, I design courses that are engaging and challenging, and I create safe, inclusive environments where students can thrive. By the end of my courses, it is important for all to come away from the classroom with the feeling that we challenged ourselves to think analytically about how our world influences us and how we can influence it.</p>
      <br></br>
      <div className="flex md:flex-row flex-col gap-5 md:justify-around">
        <PhilosophyTile
          number="1"
          philDescript="Students learn how to answer sociological questions by analyzing real data."
          philosophy="Integrating data analysis across courses"
        />
        <PhilosophyTile
          number="2"
          philDescript="From the personal to the academic, students reflect on their growth throughout the semester."
          philosophy="Self-reflection and self-awareness "
        />
        <PhilosophyTile
          number="3"
          philDescript="Students engage with sociological theory and methods on real-world social issues alongside community partners or real data to understand our world."
          philosophy="Learning by doing "
        />
      </div>
    </div>
  );
};

export default TeachingSection;

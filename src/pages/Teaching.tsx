import React from "react";
import {Link as A} from "react-scroll";
import StandardPage from "../components/StandardPage";
import ClassCard from "../components/ClassCard";
import PhilosophyTile from "../components/PhilosophyTile";
import teachingImage from '../images/dr-heng-moss_classroom.jpg';

const Teaching = () => {
    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-row justify-between items-start bg-white p-16 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">Teaching</h1>
                    <p className="text-black">Explore the ways I impact my students and the experience that I have in higher education</p>
                    <div className="flex gap-3">
                        <A to="" spy={true} smooth={true}>
                            <button className="bg-webGreen border-webGreen border-4 p-1 rounded-md text-white">Philosophy</button>
                        </A>
                        <A to="" spy={true} smooth={true}>
                            <button className="border-webGreen border-4 p-1 rounded-md text-webGreen">Education</button>
                        </A>
                    </div>
                </div>
                <img src={teachingImage} className="w-1/3 h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe teaching"></img>
            </div>
            <div className="pl-16 pr-16 flex flex-row justify-around">
                <PhilosophyTile number="1" philDescript="Description of your philsophy 1" philosophy="Student Led Teaching"/>
                <PhilosophyTile number="2" philDescript="Description of your philsophy 2" philosophy="Learning By Working"/>
                <PhilosophyTile number="3" philDescript="Description of your philsophy 3" philosophy="Letting You Be heard"/>
            </div>
            <div className="p-16">
                <ClassCard class="2202" whenTaught="Spring"/>
            </div>
        </StandardPage>
    );
};

export default Teaching;
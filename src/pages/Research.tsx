import React from "react";
import StandardPage from "../components/StandardPage";
import researchImage from '../images/research2.jpeg';

const Research = () => {
    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-row justify-around items-start bg-white p-16 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">Research</h1>
                    <p className="text-black">Discover the research that I partake in and the potential effects of it.</p>
                </div>
                <img src={researchImage} className="w-1/3 h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
            </div>
        </StandardPage>
    );
};

export default Research;
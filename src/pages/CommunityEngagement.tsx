import React from "react";
import {Link as A} from "react-scroll";
import StandardPage from "../components/StandardPage";
import communityImage from '../images/communityengagement.png';

const CommunityEngagement = () => {
    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-row justify-around items-start bg-white p-16 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">Community Engagement</h1>
                    <p className="text-black">Learn the various ways that I connect to my community, and the effect it has.</p>
                    <A to="" spy={true} smooth={true}>
                        <button className="bg-webGreen border-webGreen border-4 p-1 rounded-md text-white">Philosophy</button>
                    </A>
                </div>
                <img src={communityImage} className="w-1/3 h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
            </div>
        </StandardPage>
    );
};

export default CommunityEngagement;
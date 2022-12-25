import React from "react";
import StandardPage from "../components/StandardPage";
import HomepageInfo from "../components/HomepageInfo";
import elainaImage from '../images/johnswolfe_2021.jpeg';

const Homepage = (props: any) => {
    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-row justify-center items-start bg-white p-16 gap-10">
                <img src={elainaImage} className="w-1/3 h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">This is the start of something great!</h1>
                    <p className="text-black">This is some text</p>
                </div>
            </div>
            <HomepageInfo title='Teaching' description='Teaching description' goingWhere='Learn More' route="/Teaching"/>
            <HomepageInfo title='Research' description='Research description' goingWhere='Learn More' colors="color" route="/Research"/>
            <HomepageInfo title='Community Engagement' description='Community Engagement description' goingWhere='Learn More' route="/Community Engagement"/>
            <HomepageInfo title='Mapping Abortion' description='Mapping Abortion description' goingWhere='Learn More' colors="color" route="/MappingAbortion"/>
        </StandardPage>
    );
};

export default Homepage;
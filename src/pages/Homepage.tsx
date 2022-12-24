import React from "react";
import StandardPage from "../components/StandardPage";
import HomepageInfo from "../components/HomepageInfo";

const Homepage = (props: any) => {
    return (
        <StandardPage>
            <h1 className="text-green-600 h-screen">This is the start of something great!</h1>
            <HomepageInfo title='Teaching' description='Teaching description' goingWhere='Learn More' route="/Teaching"/>
            <HomepageInfo title='Research' description='Research description' goingWhere='Learn More' colors="color" route="/Research"/>
            <HomepageInfo title='Community Engagement' description='Community Engagement description' goingWhere='Learn More' route="/Community Engagement"/>
        </StandardPage>
    );
};

export default Homepage;
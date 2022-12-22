import React from "react";
import StandardPage from "../components/StandardPage";
import HomepageInfo from "../components/HomepageInfo";

const Homepage = (props: any) => {
    return (
        <StandardPage>
            <h1 className="text-green-600 h-80">This is the start of something great!</h1>
            <HomepageInfo title='Teaching' description='Teaching description' goingWhere='Learn More'/>
            <HomepageInfo title='Research' description='Research description' goingWhere='Learn More'/>
            <HomepageInfo title='Community Engagement' description='Community Engagement description' goingWhere='Learn More'/>
        </StandardPage>
    );
};

export default Homepage;
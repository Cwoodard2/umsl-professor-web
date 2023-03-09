import React from "react";
import StandardPage from "../components/StandardPage";
import HomepageInfo from "../components/HomepageInfo";
import elainaImage from "../images/johnswolfe_2021.jpeg";

const Homepage = (props: any) => {
  type HomepageObj = {
    title: string;
    descript: string;
    going: string;
    route: string;
    colors: string;
  };

  let homepageToBuild: HomepageObj[] = [
    {
      title: "Teaching",
      descript:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      going: "Learn More",
      route: "/Teaching",
      colors: "",
    },
    {
      title: "Research",
      descript:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      going: "Learn More",
      route: "/Research",
      colors: "color",
    },
    {
      title: "Community Engagement",
      descript:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      going: "Learn More",
      route: "/Community Engagement",
      colors: "",
    },
    {
      title: "Mapping Abortion",
      descript:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      going: "Learn More",
      route: "/MappingAbortion",
      colors: "color",
    },
  ];

  const sections = homepageToBuild.map((section) => (
    <HomepageInfo
      title={section.title}
      description={section.descript}
      goingWhere="Learn More"
      route={section.route}
      colors={section.colors}
    />
  ));
  return (
    <StandardPage>
      <div className="w-screen flex flex-col-reverse md:flex-row justify-start items-start bg-white p-16 gap-10">
        <img
          src={elainaImage}
          className="w-3/3 h-4/5 sm:w-3/3 sm:h-3/5 md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
        <div className="flex flex-col">
          <h1 className="text-webGreen rockwell text-4xl">
            Hello I'm Elaina Johns-Wolfe!
          </h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      {sections}
    </StandardPage>
  );
};

export default Homepage;

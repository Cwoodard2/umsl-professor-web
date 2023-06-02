import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavButton from "./TopNavButton";

const NavMobile = (props: any) => {
  const [showMobile, setShowMobile] = useState(false);

  const showMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <>
      <div className="md:hidden flex flex-row justify-between items-center w-screen pl-2 pr-2">
        <Link to="/">
          <button className="text-3xl text-webGreen rockwell">EJW</button>
        </Link>
        {!showMobile ? (
          <div className="flex flex-col gap-1" onClick={showMobileMenu}>
            <div className="bg-webGreen w-7 h-1 rounded-full"></div>
            <div className="bg-webGreen w-7 h-1 rounded-full"></div>
            <div className="bg-webGreen w-7 h-1 rounded-full"></div>
          </div>
        ) : (
          <p
            className="text-webGreen rockwell font-bold text-3xl"
            onClick={showMobileMenu}
          >
            X
          </p>
        )}
      </div>
      {showMobile && (
        <div className="md:hidden flex flex-col justify-start w-screen pl-4 pr-4">
          <TopNavButton path="Research" name="Research" />
          <TopNavButton path="Teaching" name="Teaching" />
          <TopNavButton
            path="CommunityEngagement"
            name="Community Engagement"
          />
          <TopNavButton path="MappingAbortion" name="Mapping Abortion" />
          <TopNavButton path="AboutMe" name="About" />
        </div>
      )}
    </>
  );
};

export default NavMobile;

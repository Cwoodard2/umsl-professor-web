import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavButton from "./TopNavButton";

const CMSNav = (props: any) => {
  const [showMobile, setShowMobile] = useState(false);

  const showMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <>
      <div className="flex flex-col h-auto w-screen justify-center items-center p-3 shadow-md shadow-black sticky top-0 bg-white gap-5">
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center gap-2">
          <div className="flex flex-row gap-10">
          <TopNavButton path="loginPage" name="Sign Out"/>
            <TopNavButton path="ResearchEditor" name="Research Editor"/>
            <TopNavButton path="ClassCardEditor" name="Class Card Editor"/>
            <TopNavButton path="ComEngageEditor" name="Community Engagement Editor"/>
          </div>
        </div>
        <div className="md:hidden flex flex-row justify-between items-center w-screen pl-2 pr-2">
          <Link to="/">
            <button className="text-3xl text-webGreen rockwell">EJW</button>
          </Link>
          <div className="" onClick={showMobileMenu}>
            <p>---</p>
          </div>
        </div>
        {showMobile && (
          <div className="md:hidden flex flex-col justify-start w-screen pl-4 pr-4">
            <TopNavButton path="ResearchEditor" name="Research Editor"/>
            <TopNavButton path="ClassCardEditor" name="Class Card Editor"/>
            <TopNavButton path="ComEngageEditor" name="Community Engagement Editor"/>
          </div>
        )}
      </div>
    </>
  );
};

export default CMSNav;

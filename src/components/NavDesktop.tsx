import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavButton from "./TopNavButton";

const NavDesktop = (props: any) => {

  return (
    <>
        <div className="hidden md:flex md:flex-col md:justify-center md:items-center gap-2 z-50">
          <Link to="/">
            <button className="text-4xl text-webGreen rockwell">
              Elaina Johns-Wolfe
            </button>
            <div className="h-1 bg-webGreen rounded-lg w-full"></div>
          </Link>
          <div className="flex flex-row gap-10">
            <TopNavButton path="Research" name="Research"/>
            <TopNavButton path="Teaching" name="Teaching"/>
            <TopNavButton path="CommunityEngagement" name="Community Engagement"/>
            <TopNavButton path="MappingAbortion" name="Mapping Abortion"/>
            <TopNavButton path="AboutMe" name="About"/>
          </div>
        </div>
    </>
  );
};

export default NavDesktop;

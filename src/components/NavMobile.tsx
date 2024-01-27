import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavButton from "./TopNavButton";
import NavButton from "./NavButton";
import MobileNavButton from "./MobileNavButton";

const NavMobile = (props: any) => {
  const [showMobile, setShowMobile] = useState(false);
  const aboutIcon = <svg className="w-6 h-6 text-webGreen dark:text-webGreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm2 4a3 3 0 0 0-3 2v.2c0 .1-.1.2 0 .2v.2c.3.2.6.4.9.4h6c.3 0 .6-.2.8-.4l.2-.2v-.2l-.1-.1A3 3 0 0 0 10 14H7.9Z" clip-rule="evenodd"/>
</svg>
const mappingIcon = <svg className="w-6 h-6 text-webGreen dark:text-webGreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clip-rule="evenodd"/>
</svg>
const comEngageIcon = <svg className="w-6 h-6 text-webGreen dark:text-webGreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z" clip-rule="evenodd"/>
</svg>
const researchIcon = <svg className="w-6 h-6 text-webGreen dark:text-webGreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z"/>
</svg>
const teachingIcon = <svg className="w-6 h-6 text-webGreen dark:text-webGreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M11 4.7C8.7 4.1 6.8 4 4 4a2 2 0 0 0-2 2v11c0 1.1 1 2 2 2 2.8 0 4.5.2 7 .8v-15Zm2 15.1c2.5-.6 4.2-.8 7-.8a2 2 0 0 0 2-2V6c0-1-.9-2-2-2-2.8 0-4.7.1-7 .7v15.1Z" clip-rule="evenodd"/>
</svg>






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
        <div className="md:hidden flex flex-row flex-wrap justify-center items-center w-screen pl-4 pr-4 gap-3">
          <MobileNavButton path="/Research" PlaceToGo="Research" icon={researchIcon}/>
          <MobileNavButton path="/Teaching" PlaceToGo="Teaching" icon={teachingIcon}/>
          <MobileNavButton
            path="/CommunityEngagement"
            PlaceToGo="Community Engagement"
            icon={comEngageIcon}
          />
          <MobileNavButton path="/MappingAbortion" PlaceToGo="Mapping Abortion" icon={mappingIcon}/>
          <MobileNavButton path="/AboutMe" PlaceToGo="About" icon={aboutIcon}/>
        </div>
      )}
    </>
  );
};

export default NavMobile;

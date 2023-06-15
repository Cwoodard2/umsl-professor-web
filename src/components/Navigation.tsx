import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navigation = (props: any) => {
  const [showMobile, setShowMobile] = useState(false);

  const showMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  return (
    <>
      <div className="flex flex-col h-auto w-screen justify-center items-center p-3 shadow-md shadow-black sticky top-0 bg-white gap-5 z-50">
        <NavDesktop />
        <NavMobile />
      </div>
    </>
  );
};

export default Navigation;

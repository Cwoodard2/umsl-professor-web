import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavButton = (props: any) => {
  return (
    <Link to={`/${props.path}`}>
      <button className="relative inline-block after:absolute after:w-full after:h-1 after:bg-webGreen after:bottom-0 after:left-0 after:rounded-md after:scale-x-0 hover:after:scale-x-100 transition-all origin-bottom-left">
        {props.name}
      </button>
    </Link>
  );
};

export default TopNavButton;

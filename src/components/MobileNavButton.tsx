import React from "react";
import { Link } from "react-router-dom";

const MobileNavButton = (props: any) => {
  let styles: string;
  if (props.colors === "white") {
    styles =
      "border-white border-2 p-2 rounded-md text-white hover:text-webGreen hover:bg-white transition-all font-bold";
  } else {
    styles =
      "border-webGreen border-2 p-2 rounded-md text-webGreen hover:text-white hover:bg-webGreen transition-all font-bold";
  }

  return (
    <Link to={props.path}>
      <button className={styles}><div className="flex flex-row gap-1 hover:text-white *:fill-white">{props.icon}{props.PlaceToGo}</div></button>
    </Link>
  );
};

export default MobileNavButton;

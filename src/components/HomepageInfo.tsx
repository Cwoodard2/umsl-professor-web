import React from "react";
import NavButton from "./NavButton";
import elainaImage from "../images/johnswolfe_2021.jpeg";

const HomepageInfo = (props: any) => {
  type ColorsProps = {
    textColors: string;
    bgColors: string;
    buttonColors: string;
    headingStyle: string;
    divStyle: string;
  };

  let colors: ColorsProps = {
    textColors: "",
    bgColors: "",
    buttonColors: "",
    headingStyle: "",
    divStyle: "",
  };

  if (props.colors === "color") {
    colors.bgColors =
      "w-screen flex flex-col-reverse md:flex-row justify-center md:justify-start items-center bg-white p-16 gap-10";
    colors.textColors = "text-black";
    colors.buttonColors = "green";
    colors.headingStyle = "text-webGreen text-3xl rockwell";
    colors.divStyle = "w-auto h-1 bg-webGreen rounded-sm";
  } else {
    colors.bgColors =
      "w-screen flex flex-col-reverse md:flex-row-reverse justify-center md:justify-end items-center bg-webGreen p-16 gap-10";
    colors.textColors = "text-white";
    colors.buttonColors = "white";
    colors.headingStyle = "text-white text-3xl rockwell";
    colors.divStyle = "w-auto h-1 bg-white rounded-sm";
  }

  return (
    <div className={colors.bgColors}>
      <img
        src={elainaImage}
        className="w-3/3 h-auto md:w-1/3 sm:h-3/5 rounded-md shadow-md object-cover"
        alt="Elaina Johns-Wolfe"
      ></img>
      <div className="flex flex-col gap-12 items-start h-auto md:h-3/5">
        <div>
          <h1 className={colors.headingStyle}>{props.title}</h1>
          <div className={colors.divStyle}></div>
        </div>
        <p className={colors.textColors}>{props.description}</p>
        <NavButton
          path={props.route}
          PlaceToGo={props.goingWhere}
          colors={colors.buttonColors}
        />
      </div>
    </div>
  );
};

export default HomepageInfo;

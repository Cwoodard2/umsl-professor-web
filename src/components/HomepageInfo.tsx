import React from "react";
import NavButton from "./NavButton";

const HomepageInfo = (props: any) => {
    type ColorsProps = {
        textColors: string,
        bgColors:string
        buttonColors: string
    };

    let colors: ColorsProps = {
        textColors: "",
        bgColors: "",
        buttonColors: ""
    };

    if (props.colors === 'color') {
        colors.bgColors = "w-screen h-screen flex flex-row justify-around items-center bg-white pl-32 pr-32";
        colors.textColors = "text-green-600";
        colors.buttonColors = "green";
    } else {
        colors.bgColors = "w-screen h-screen flex flex-row justify-around items-center bg-green-700 pl-32 pr-32";
        colors.textColors = 'text-white';
        colors.buttonColors = "white";
    }

    return (
            <div className={colors.bgColors}>
                <div className="bg-black w-20 h-20"></div>
                <div className="flex flex-col">
                    <h1 className={colors.textColors}>{props.title}</h1>
                    <p className={colors.textColors}>{props.description}</p>
                    <NavButton path={props.route}PlaceToGo={props.goingWhere} colors={colors.buttonColors}/>
                </div>
            </div>
    );
};

export default HomepageInfo;
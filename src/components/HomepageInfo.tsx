import React from "react";
import NavButton from "./NavButton";

const HomepageInfo = (props: any) => {
    let colors: string;
    let bgColors: string;

    if (props.title === 'Research') {
        bgColors = "w-screen h-screen flex flex-row justify-around items-center bg-white pl-32 pr-32";
        colors = "text-green-600";
        console.log('research');
    } else {
        console.log("not research");
        bgColors = "w-screen h-screen flex flex-row justify-around items-center bg-green-700 pl-32 pr-32";;
        colors = 'text-white'
    }

    console.log(colors);

    return (
        <div className={bgColors}>
                <div className="bg-black w-10 h-10"></div>
                <div className="flex flex-col">
                    <h1 className={colors}>{props.title}</h1>
                    <p className={colors}>{props.description}</p>
                    <NavButton PlaceToGo={props.goingWhere}/>
                </div>
            </div>
    );
};

export default HomepageInfo;
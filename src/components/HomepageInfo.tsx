import React from "react";
import NavButton from "./NavButton";
import elainaImage from '../images/johnswolfe_2021.jpeg';

const HomepageInfo = (props: any) => {
    type ColorsProps = {
        textColors: string,
        bgColors:string,
        buttonColors: string
    };

    let colors: ColorsProps = {
        textColors: "",
        bgColors: "",
        buttonColors: ""
    };

    if (props.colors === 'color') {
        colors.bgColors = "w-screen h-screen flex flex-row justify-start items-start bg-white p-16 gap-10";
        colors.textColors = "text-webGreen";
        colors.buttonColors = "green";
    } else {
        colors.bgColors = "w-screen h-screen flex flex-row-reverse justify-start items-start bg-webGreen p-16 gap-10";
        colors.textColors = 'text-white';
        colors.buttonColors = "white";
    }

    return (
            <div className={colors.bgColors}>
                <img src={elainaImage} className="w-1/3 h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
                <div className="flex flex-col">
                    <h1 className={colors.textColors}>{props.title}</h1>
                    <p className={colors.textColors}>{props.description}</p>
                    <NavButton path={props.route}PlaceToGo={props.goingWhere} colors={colors.buttonColors}/>
                </div>
            </div>
    );
};

export default HomepageInfo;
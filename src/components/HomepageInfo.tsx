import React from "react";
import NavButton from "./NavButton";

const HomepageInfo = (props: any) => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center">
                <img></img>
                <div className="flex flex-col">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <NavButton PlaceToGo={props.goingWhere}/>
                </div>
            </div>
    );
};

export default HomepageInfo;
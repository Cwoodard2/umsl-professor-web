import React from "react";
import NavButton from "./NavButton";

const HomepageInfo = (props: any) => {
    return (
        <div className="w-screen v-screen">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h1></h1>
                    <p></p>
                    <NavButton PlaceToGo={props.goingWhere}/>
                </div>
            </div>
        </div>
    );
};
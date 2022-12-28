import React from "react";
import { Link } from 'react-router-dom';

const NavButton = (props: any) => {
    let styles: string;
    if (props.colors === 'white') {
        styles = "border-white border-4 p-1 rounded-md text-white hover:text-webGreen hover:bg-white transition-all";
    } else {
        styles = "border-webGreen border-4 p-1 rounded-md text-webGreen hover:text-white hover:bg-webGreen transition-all"
    }

    return (
        <Link to={props.path}>
            <button className={styles}>{props.PlaceToGo}</button>
        </Link>
    );
};

export default NavButton;
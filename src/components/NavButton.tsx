import React from "react";
import { Link } from 'react-router-dom';

const NavButton = (props: any) => {
    return (
        <Link to='/'>
            <button className="border-white border-4 p-2 rounded-md text-white">{props.PlaceToGo}</button>
        </Link>
    );
};

export default NavButton;
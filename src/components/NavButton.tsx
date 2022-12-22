import React from "react";
import { Link } from 'react-router-dom';

const NavButton = (props: any) => {
    return (
        <Link to='/'>
            <button>{props.PlaceToGo}</button>
        </Link>
    );
};

export default NavButton;
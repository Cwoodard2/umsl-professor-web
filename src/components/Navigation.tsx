import React from "react";
import { Link } from 'react-router-dom';

const Navigation = (props: any) => {
    return (
        <div className="flex flex-col h-auto w-screen justify-center items-center">
                <Link to='/'>
                    <button>Elaina Johns-Wolfe</button>
                </Link>
            <div className="flex flex-row gap-3">
                <Link to='/Teaching'>
                    <button>Teaching</button>
                </Link>
                <Link to='/Research'>
                    <button>Research</button>
                </Link>
                <Link to='/CommunityEngagement'>
                    <button>Community Engagement</button>
                </Link>
                <Link to='/MappingAbortion'>
                    <button>Map</button>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
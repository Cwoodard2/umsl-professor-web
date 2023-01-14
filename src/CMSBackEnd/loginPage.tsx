import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl">Login</h1>
            <input placeholder="Username" className="border border-webGreen rounded-sm"></input>
            <input placeholder="Password" className="border border-webGreen rounded-sm"></input>
            <Link to="/ItemEditorcopy">
                <button className="bg-webGreen text-white pr-1 pl-1 rounded-md">Login</button>
            </Link>
        </div>
    );
};

export default LoginPage;
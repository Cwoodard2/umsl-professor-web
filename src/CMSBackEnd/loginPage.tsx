import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-2/5">
            <h1>Login</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <Link to="/ItemEditor">
                <button className="bg-webGreen text-white">Login</button>
            </Link>
        </div>
    );
};

export default LoginPage;
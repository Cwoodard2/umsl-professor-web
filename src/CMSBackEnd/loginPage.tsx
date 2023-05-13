import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const verifyLogin = () => {

    }
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl text-webGreen rockwell">Login</h1>
            <div className="flex flex-col gap-2">
                <input placeholder="Username" className="border border-webGreen rounded p-1"></input>
                <input placeholder="Password" className="border border-webGreen rounded p-1"></input>
            </div>
            <br></br>
            <Link to="/ResearchEditor">
                <button className="bg-webGreen text-white p-2 rounded-md hover:bg-white hover:text-webGreen hover:border hover:border-webGreen transition-all">Login</button>
            </Link>
        </div>
    );
};

export default LoginPage;
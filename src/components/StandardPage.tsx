import React from "react";
import Navigation from "./Navigation";

const StandardPage = (props: any) => {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    );
};

export default StandardPage;
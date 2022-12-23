import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StandardPage = (props: any) => {
    return (
        <div>
            <Navigation />
            {props.children}
            <Footer />
        </div>
    );
};

export default StandardPage;
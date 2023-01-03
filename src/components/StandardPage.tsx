import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StandardPage = (props: any) => {
    return (
        <div className="flex flex-col gap-10">
            <Navigation />
                {props.children}
            <Footer />
        </div>
    );
};

export default StandardPage;
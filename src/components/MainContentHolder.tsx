import React from "react";

const MainContentHolder = (props: any) => {
    return(
        <div className="flex md:flex-row mx-4 flex-col flex-wrap justify-center gap-10 my-6 items-center md:items-stretch">
            {props.children}
        </div>
    );
}

export default MainContentHolder;
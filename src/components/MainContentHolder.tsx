import React from "react";

const MainContentHolder = (props: any) => {
    return(
        <div className="flex md:flex-col mx-4 md:mx-16 flex-col flex-wrap justify-center gap-20 my-6 items-center md:items-stretch">
            {props.children}
        </div>
    );
}

export default MainContentHolder;
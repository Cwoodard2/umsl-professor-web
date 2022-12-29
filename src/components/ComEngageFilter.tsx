import React from "react";

const ComEngageFilter = (props: any) => {
    return (
        <div className="pl-16 scroll-mt-10" id="filter">
            <div className="bg-webBlue text-white w-1/5 rounded-md p-1"><button>{props.tags}</button></div>
        </div>
    );
};

export default ComEngageFilter;
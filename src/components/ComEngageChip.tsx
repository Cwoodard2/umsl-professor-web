import React from "react";

const ComEngageChip = (props: any) => {
    return (
        <>
            <button className="border-webGreen border-2 rounded-full text-webGreen pl-2 pr-2 scale-75">{props.name}</button>
        </>
    );
};

export default ComEngageChip;
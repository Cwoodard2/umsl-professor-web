import React from "react";

const ComEngageChip = (props: any) => {
    return (
        <>
            <button className="border-webGreen border-2 rounded-full text-webGreen pt-1 pb-1 pl-2 pr-2">{props.name}</button>
        </>
    );
};

export default ComEngageChip;
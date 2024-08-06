import React from "react";

const PageTitleWrapper = (props: any) => {
    return (
        <div className="w-screen flex flex-col md:flex-row md:justify-between items-start bg-webGreen p-16 md:px-24 md:mb-16 md:py-16 gap-10">
                {props.children}
        </div>
    )
}

export default PageTitleWrapper;
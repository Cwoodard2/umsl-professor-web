import React from "react";

const ClassModal = (props: any) => {
    if (!props.show) {
        return null;
    }

    function closeModal() {
        console.log("Modal has been pressed");
        props.toggle();
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <div className="bg-webGreen w-28 h-28">
                <p>this is to test</p>
                <button className="bg-white" onClick={() => closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ClassModal;
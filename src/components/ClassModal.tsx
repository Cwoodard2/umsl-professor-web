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
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 backdrop-blur-sm">
      <div className="bg-webGreen w-3/5 h-3/5 rounded-md p-2 text-white">
        <h2 className="text-2xl rockwell">{props.class}</h2>
        <p>{props.description}</p>
        <button
          className="pl-1 pr-1 text-white border-white border-2 rounded-md"
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ClassModal;

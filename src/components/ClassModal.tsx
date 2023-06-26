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
      <div className="bg-webGreen w-screen h-screen sm:h-auto sm:w-3/5 rounded-md p-8 text-white flex flex-col shadow-lg shadow-webGreen animate-inOut">
        <h2 className="text-2xl rockwell">{props.class}</h2>
        <br></br>
        <p>{props.description}</p>
        <br></br>
        <div className="flex flex-row gap-5">
          <p>Mode: {props.mode}</p>
          {props.nextOffered && <p>Next Offered: {props.nextOffered}</p>}
          <p>How Often It's Taught: {props.taught}</p>
        </div>
        <br></br>
        <button
          className="pl-1 pr-1 text-white border-white border-2 rounded-md self-center"
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ClassModal;

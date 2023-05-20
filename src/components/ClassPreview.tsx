import React, { useState } from "react";
import ClassModal from "./ClassModal";

const ClassCardPreview = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  function changeModalState() {
    setShowModal(true);
  }

  return (
    <div className="flex flex-col w-56 sm:w-6/12 md:w-3/12 bg-webGreen rounded-md shadow-md shadow-black transition-all p-4 flex-shrink-0 gap-2">
      <ClassModal
        show={showModal}
        toggle={() => setShowModal(false)}
        class={props.class}
        taught={props.schedule}
        description={props.descript}
        mode={props.mode}
        nextOffered={props.nextOffered}
      />
      <img
        src={props.classImg}
        className="w-full rounded-md shadow-md object-cover aspect-square"
        alt="Teacher teaching the class"
      ></img>
      <h4 className="rockwell text-white text-xl">{props.class}</h4>
      <button
        onClick={changeModalState}
        className="border-white border-4 p-1 w-full rounded-md text-white hover:text-webGreen hover:bg-white transition-all font-bold"
      >
        Learn more
      </button>
    </div>
  );
};
export default ClassCardPreview;

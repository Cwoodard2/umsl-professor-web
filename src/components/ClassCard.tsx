import React, { useState } from "react";
import teachingImage from "../images/dr-heng-moss_classroom.jpg";
import ClassModal from "./ClassModal";

const ClassCard = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  function changeModalState() {
    setShowModal(true);
  }

  return (
    <div className="flex flex-col w-80 h-96 bg-webGreen rounded-md hover:shadow-md hover:shadow-black transition-all p-4 flex-shrink-0">
      <ClassModal
        show={showModal}
        toggle={() => setShowModal(false)}
        class={props.class}
        taught={props.whenTaught}
        description={props.descript}
      />
      <img
        src={teachingImage}
        className="w-full h-80 rounded-md shadow-md object-cover"
        alt="Teacher teaching the class"
      ></img>
      <h4 className="rockwell text-white text-xl">{props.class}</h4>
      <p className="text-white">{props.whenTaught}</p>
      <button
        onClick={changeModalState}
        className="border-white border-4 p-1 w-full rounded-md text-white hover:text-webGreen hover:bg-white transition-all"
      >
        Learn more
      </button>
    </div>
  );
};
export default ClassCard;

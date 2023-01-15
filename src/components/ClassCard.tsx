import React, {useState} from "react";
import teachingImage from '../images/dr-heng-moss_classroom.jpg';
import ClassModal from "./ClassModal";

const ClassCard = (props: any) => {
    const [showModal, setShowModal] = useState(false);

    function changeModalState() {
        setShowModal(true);
    }

    return (
        <div className="flex flex-col md:w-1/5 h-96 bg-webGreen rounded-md hover:shadow-lg hover:shadow-black transition-all w-48">
            <ClassModal show={showModal} toggle={() => setShowModal(false)} class={props.class} taught={props.whenTaught} description={props.descript}/>
            <img src={teachingImage} className="w-full h-80 rounded-md shadow-md object-cover" alt="Teacher teaching the class"></img>
            <h4 className="rockwell text-white text-xl">{props.class}</h4>
            <p className="text-white">{props.whenTaught}</p>
            <button onClick={changeModalState}>Learn more</button>
        </div>
    );
};

export default ClassCard;
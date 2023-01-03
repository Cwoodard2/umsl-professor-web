import React, {useState} from "react";
import teachingImage from '../images/dr-heng-moss_classroom.jpg';
import ClassModal from "./ClassModal";

const ClassCard = (props: any) => {
    const [showModal, setShowModal] = useState(false);

    function changeModalState() {
        setShowModal(true);
    }

    return (
        <div className="flex flex-col md:w-1/5 h-96 bg-webGreen rounded-md hover:shadow-lg hover:shadow-black transition-all">
            <img src={teachingImage} className="w-5/5 h-80 rounded-md shadow-md object-cover"></img>
            <h4 className="rockwell text-white text-xl">{props.class}</h4>
            <p className="text-white">{props.whenTaught}</p>
            <button onClick={changeModalState}>Leanr more</button>
            <ClassModal show={showModal} toggle={() => setShowModal(false)}/>
        </div>
    );
};

export default ClassCard;
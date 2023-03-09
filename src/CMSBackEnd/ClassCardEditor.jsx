import React, {useState} from "react";
import CMSNav from "../components/CMSNav";
import ClassCard from "../components/ClassCard";
import {db} from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ClassCardEditor = () => {
    const [description, setDescription] = useState("");
    const [className, setClassName] = useState("");
    const [mode, setMode] = useState("");
    const [schedule, setSchedule] = useState("");
    const [nextOffered, setNextOffered] = useState("");
    // type researchToAdd = {
    //     title: any,
    //     abstract: any,
    //     authors: any[],
    //     articleLink: any
    // }

    // function addItem() {
    //     const newList = articleAuthors.concat(document.getElementById("whenTaught").value);
    //     document.getElementById("whenTaught").value = "";
    //     setAuthors(newList);
    // }

    const handleSubmit = async () => {
        const toSave = {
            className: className,
            description: description,
            image: "TEACHING.png",
            mode: mode,
            nextOffered: nextOffered,
            schedule: schedule
        }

        setClassName("");
        setDescription("");
        setMode("");
        setNextOffered("");
        setSchedule("");

        const docRef = doc(db, "professordata", 'ClassCards');
        await updateDoc(docRef, {
            Cards: arrayUnion(toSave)
        });
    };


    return(
        <>
        <CMSNav />
        <div className="flex flex-row">
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1>Class Card</h1>
            {/* <input placeholder="Class number" id="class" className="border border-webGreen rounded-sm p-1" value={card} onChange={(e) => setCard(e.target.value)}></input> */}
            <input placeholder="class name" id="class-name" className="border border-webGreen rounded-sm p-1" value={className} onChange={(e) => setClassName(e.target.value)}></input>
            <input placeholder="Mode" id="mode" className="border border-webGreen rounded-sm p-1" value={mode} onChange={(e) => setMode(e.target.value)}></input>
            <input placeholder="schedule" id="schedule" className="border border-webGreen rounded-sm p-1" value={schedule} onChange={(e) => setSchedule(e.target.value)}></input>
            <input placeholder="next offered" id="next-offered" className="border border-webGreen rounded-sm p-1" value={nextOffered} onChange={(e) => setNextOffered(e.target.value)}></input>
            <textarea placeholder="Course Description" id="description" className="border border-webGreen rounded-sm p-1" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <input type="file"></input>
            <button className="bg-webGreen rounded-sm pl-1 pr-1 text-white" onClick={() => handleSubmit()}>Submit</button>
        </div>
        <ClassCard
            class={className}
            descript={description}
            mode={mode}
            schedule={schedule}
            nextOffered={nextOffered}
            classImg={""}
          />
        </div>
        </>
    );
};

export default ClassCardEditor;
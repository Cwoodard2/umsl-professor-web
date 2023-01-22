import React, {useState} from "react";
import CMSNav from "../components/CMSNav";
import ClassCard from "../components/ClassCard";
import {db} from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ClassCardEditor = () => {
    const [articleAuthors, setAuthors] = useState([]);
    const [card, setCard] = useState("");
    const [description, setDescription] = useState("");
    // type researchToAdd = {
    //     title: any,
    //     abstract: any,
    //     authors: any[],
    //     articleLink: any
    // }

    function addItem() {
        const newList = articleAuthors.concat(document.getElementById("whenTaught").value);
        document.getElementById("whenTaught").value = "";
        setAuthors(newList);
    }

    const handleSubmit = async () => {
        const toSave = {
            title: card,
            abstract: description,
            authors: articleAuthors,
        }

        setCard("");
        setDescription("");
        setAuthors([]);

        const docRef = doc(db, "professordata", 'classCard');
        await updateDoc(docRef, {
            researchArticles: arrayUnion(toSave)
        });
    };


    return(
        <>
        <CMSNav />
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1>Class Card</h1>
            <input placeholder="Class" id="class" className="border border-webGreen rounded-sm p-1" value={card} onChange={(e) => setCard(e.target.value)}></input>
            <textarea placeholder="Course Description" id="description" className="border border-webGreen rounded-sm p-1" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <input placeholder="Semesters Taught" id="whenTaught" className="border border-webGreen rounded-sm p-1"></input>
            <ul>{articleAuthors.map((author) => <li>{author}</li>)}</ul>
            <button className="bg-webGreen rounded-sm pl-1 pr-1 text-white" onClick={() => addItem()}>Add Semester</button>
            <button className="bg-webGreen rounded-sm pl-1 pr-1 text-white" onClick={() => handleSubmit()}>Submit</button>
        </div>
        <ClassCard
            class={card}
            whenTaught={articleAuthors}
            descript={description}
          />
        </>
    );
};

export default ClassCardEditor;
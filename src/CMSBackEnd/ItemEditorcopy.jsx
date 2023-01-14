import React, {useState} from "react";
import {db} from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ItemEditor = () => {
    const [articleAuthors, setAuthors] = useState([]);
    // type researchToAdd = {
    //     title: any,
    //     abstract: any,
    //     authors: any[],
    //     articleLink: any
    // }

    function addItem() {
        const newList = articleAuthors.concat(document.getElementById("authors").value);
        document.getElementById("authors").value = "";
        setAuthors(newList);
    }

    const handleSubmit = async () => {
        const toSave = {
            title: document.getElementById("articleTitle").value,
            abstract: document.getElementById("abstract").value,
            authors: articleAuthors,
            articleLink: document.getElementById('link').value
        }

        const docRef = doc(db, "professordata", 'research');
        await updateDoc(docRef, {
            researchArticles: arrayUnion(toSave)
        });
    };


    return(
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1>Research Article</h1>
            <input placeholder="Article Title" id="articleTitle" className="border border-webGreen rounded-sm p-1"></input>
            <textarea placeholder="Abstract" id="abstract" className="border border-webGreen rounded-sm p-1"></textarea>
            <input placeholder="Author" id="authors" className="border border-webGreen rounded-sm p-1"></input>
            <ul>{articleAuthors.map((author) => <li>{author}</li>)}</ul>
            <button className="bg-webGreen rounded-sm pl-1 pr-1 text-white" onClick={() => addItem()}>Add Author</button>
            <input placeholder="Article Link" id="link" className="border border-webGreen rounded-sm p-1"></input>
            <button className="bg-webGreen rounded-sm pl-1 pr-1 text-white" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
};

export default ItemEditor;
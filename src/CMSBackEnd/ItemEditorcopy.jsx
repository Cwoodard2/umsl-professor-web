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
        <div>
            <h1>Research Article</h1>
            <input placeholder="Article Title" id="articleTitle"></input>
            <input placeholder="Abstract" id="abstract"></input>
            <input placeholder="Author" id="authors"></input>
            <button className="bg-webGreen" onClick={() => addItem()}>Add Author</button>
            <input placeholder="Article Link" id="link"></input>
            <button className="bg-webGreen text-white" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
};

export default ItemEditor;
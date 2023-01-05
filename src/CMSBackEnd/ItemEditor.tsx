import React, {useState} from "react";
import {db} from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ItemEditor = () => {
    const [articleAuthors, setAuthors] = useState([]);
    type researchToAdd = {
        title: any,
        abstract: any,
        authors: any[],
        articleLink: any
    }

    // function addItem() {
    //     const author = document.getElementById("Author") as HTMLInputElement || null;
    //     const newList = articleAuthors.concat(author.value);
    //     document.getElementById("ingredients").value = "";
    //     setAuthors(newList);
    // }

    const handleSubmit = async () => {
        const title = document.getElementById("articleTitle") as HTMLInputElement | null;
        const abstractToUse = document.getElementById("abstract") as HTMLInputElement | null;
        const aLink = document.getElementById("link") as HTMLInputElement | null;
        const toSave: researchToAdd = {
            title: title?.value,
            abstract: abstractToUse?.value,
            authors: articleAuthors,
            articleLink: aLink?.value
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
            <input placeholder="Article Link" id="link"></input>
            <button className="bg-webGreen text-white" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
};

export default ItemEditor;
import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ComEngage from "../components/ComEngage";
import { db } from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ComEngageEditor = () => {
  const [articleAuthors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [chips, setChips] = useState([]);
  // type researchToAdd = {
  //     title: any,
  //     abstract: any,
  //     authors: any[],
  //     articleLink: any
  // }

  function addItem() {
    const newList = articleAuthors.concat(
      document.getElementById("benefits").value
    );
    document.getElementById("benefits").value = "";
    setAuthors(newList);
  }

  function addChip() {
    const newList = chips.concat(
      document.getElementById("chip").value
    );
    document.getElementById("chip").value = "";
    setChips(newList);
  }

  const handleSubmit = async () => {
    const toSave = {
      title: title,
      description: description,
      benefits: articleAuthors,
      articleLink: document.getElementById("link").value,
      chips: chips
    };
    setTitle("");
    setAuthors([]);
    setChips([]);
    setDescription("");

    const docRef = doc(db, "professordata", "comEngage");
    await updateDoc(docRef, {
      comEngageOpt: arrayUnion(toSave),
    });
  };

  return (
    <>
      <CMSNav />
      <div className="flex flex-row">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1>Community Engagement</h1>
          <input
            placeholder="Title"
            id="title"
            className="border border-webGreen rounded-sm p-1"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            placeholder="Community Engagement Description"
            id="description"
            className="border border-webGreen rounded-sm p-1"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            placeholder="Benefit"
            id="benefits"
            className="border border-webGreen rounded-sm p-1"
          ></input>
          <ul>
            {articleAuthors.map((author) => (
              <li>{author}</li>
            ))}
          </ul>
          <button
            className="bg-webGreen rounded-sm pl-1 pr-1 text-white"
            onClick={() => addItem()}
          >
            Add Benefit
          </button>
          <input
            placeholder="Chip"
            id="chip"
            className="border border-webGreen rounded-sm p-1"
          ></input>
          <ul>
            {chips.map((author) => (
              <li>{author}</li>
            ))}
          </ul>
          <button
            className="bg-webGreen rounded-sm pl-1 pr-1 text-white"
            onClick={() => addChip()}
          >
            Add Chip
          </button>
          <input
            placeholder="Organization Link"
            id="link"
            className="border border-webGreen rounded-sm p-1"
          ></input>
          <button
            className="bg-webGreen rounded-sm pl-1 pr-1 text-white"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
        <ComEngage
          title={title}
          description={description}
          chips={chips}
          benefits={articleAuthors}
        />
      </div>
    </>
  );
};

export default ComEngageEditor;

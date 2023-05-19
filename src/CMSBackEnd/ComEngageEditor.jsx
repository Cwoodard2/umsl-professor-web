import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ComEngage from "../components/ComEngage";
import ItemsPreview from "../components/ItemsPreview";
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
      <div className="flex flex-row w-screen min-h-screen justify-between">
        <div className="flex flex-col gap-10 items-center border-r border-r-black py-4 px-4">
          <h1 className="text-webGreen rockwell text-4xl">Community Engagement</h1>
          <input
            placeholder="Title"
            id="title"
            className="border border-webGreen rounded p-1"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            placeholder="Community Engagement Description"
            id="description"
            className="border border-webGreen rounded p-1"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex flex-col gap-2">
          <input
            placeholder="Benefit"
            id="benefits"
            className="border border-webGreen rounded p-1"
          ></input>
          <ul>
            {articleAuthors.map((author) => (
              <li>{author}</li>
            ))}
          </ul>
          <button
            className="bg-webGreen rounded pl-1 pr-1 text-white"
            onClick={() => addItem()}
          >
            Add Benefit
          </button>
          </div>
          <div className="flex flex-col gap-2">
          <input
            placeholder="Chip"
            id="chip"
            className="border border-webGreen rounded p-1"
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
          </div>
          <input
            placeholder="Organization Link"
            id="link"
            className="border border-webGreen rounded p-1"
          ></input>
          <button
            className="bg-webGreen rounded p-2 text-white"
            onClick={() => handleSubmit()}
          >
            Save
          </button>
        </div>
        <ComEngage
          title={title}
          description={description}
          chips={chips}
          benefits={articleAuthors}
        />
        <div className="flex flex-col gap-10 items-center border-l border-r-black py-4 px-4">
          <ItemsPreview document="comEngage" editor="comEngage" arrayName="comEngageOpt" storageBucket="comEngage"/>
        </div>
      </div>
    </>
  );
};

export default ComEngageEditor;

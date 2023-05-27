import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ComEngage from "../components/ComEngage";
import ItemsPreview from "../components/ItemsPreview";
import { db, storage } from "../data/firebaseConfiguration";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { arrayUnion, doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

const ComEngageEditor = () => {
  const [benefits, setBenefits] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [chips, setChips] = useState([]);
  const [loadedItem, setLoadedItem] = useState({});
  const [imageURL, setImageURL] = useState("");
  const [imageName, setImageName] = useState("");
  // type researchToAdd = {
  //     title: any,
  //     abstract: any,
  //     authors: any[],
  //     articleLink: any
  // }

  function addItem() {
    const newList = benefits.concat(
      document.getElementById("benefits").value
    );
    document.getElementById("benefits").value = "";
    setBenefits(newList);
  }

  function changeItem(params) {
    setTitle(params.title);
    setDescription(params.description);
    setBenefits(params.benefits);
    setChips(params.chips)
    setLoadedItem({
      title: params.title,
      description: params.description,
      benefits: params.benefits,
      chips: params.chips,
      articleLink: "",
      image: params.img
    })
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
      benefits: benefits,
      articleLink: document.getElementById("link").value,
      chips: chips
    };

    let imageRef = ref(storage, `comEngage/${imageName}`);
    await uploadBytes(imageRef, imageURL).then((snapshot) => {
      console.log('Image uploaded!');
    })

    const docRef = doc(db, "professordata", "comEngage");
    await updateDoc(docRef, {
      comEngageOpt: arrayRemove(loadedItem),
    });

    setTitle("");
    setBenefits([]);
    setChips([]);
    setDescription("");
    setLoadedItem({});
    setImageURL("");
    setImageName("");


    await updateDoc(docRef, {
      comEngageOpt: arrayUnion(toSave),
    });
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImageURL(e.target.files[0]);
    setImageName(e.target.files[0].name);
    return false;
  }

  return (
    <>
      <CMSNav />
      <div className="flex flex-row w-screen min-h-screen justify-between">
        <div className="flex flex-col gap-10 items-center border-r border-r-black py-4 px-4">
          <h1 className="text-webGreen rockwell text-2xl">Community Engagement</h1>
          <input
            placeholder="Title"
            id="title"
            className="border border-webGreen rounded p-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <textarea
            placeholder="Community Engagement Description"
            id="description"
            className="border border-webGreen rounded p-1"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <div className="flex flex-col gap-2">
          <input
            placeholder="Benefit"
            id="benefits"
            className="border border-webGreen rounded p-1"
          ></input>
          <ul>
            {benefits.map((author) => (
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
          <input id="input" type="file" onChange={(e) => handleImage(e)}></input>
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
          benefits={benefits}
        />
        <div className="flex flex-col gap-10 items-center border-l border-l-black py-4 px-4 w-3/12">
          <ItemsPreview document="comEngage" editor="comEngage" arrayName="comEngageOpt" storageBucket="comEngage" updater={changeItem}/>
        </div>
      </div>
    </>
  );
};

export default ComEngageEditor;

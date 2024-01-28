import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ComEngage from "../components/ComEngage";
import ComEngagePreview from "../components/ComEngagePreview";
import ItemsPreview from "../components/ItemsPreview";
import education from "../images/education.jpeg";
import Loading from "../components/Loading";
import { db, storage } from "../data/firebaseConfiguration";
import { ref, uploadBytes } from "firebase/storage";
import {
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { auth } from "../data/firebaseConfiguration";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ComEngageEditor = () => {
  const [benefits, setBenefits] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [chips, setChips] = useState([]);
  const [orgLink, setOrgLink] = useState("");
  const [loadedItem, setLoadedItem] = useState({});
  const [imageURL, setImageURL] = useState(new File([""], education));
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // type researchToAdd = {
  //     title: any,
  //     abstract: any,
  //     authors: any[],
  //     articleLink: any
  // }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
    } else {
      navigate("/loginPage");
    }
  });

  function addItem() {
    const newList = benefits.concat(document.getElementById("benefits").value);
    document.getElementById("benefits").value = "";
    setBenefits(newList);
  }

  function changeItem(params) {
    setTitle(params.title);
    setDescription(params.description);
    setBenefits(params.benefits);
    setChips(params.chips);
    setLoadedItem({
      title: params.title,
      description: params.description,
      benefits: params.benefits,
      chips: params.chips,
      articleLink: orgLink,
      image: params.img,
    });
  }

  function addChip() {
    const newList = chips.concat(document.getElementById("chip").value);
    document.getElementById("chip").value = "";
    setChips(newList);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const toSave = {
      title: title,
      description: description,
      benefits: benefits,
      articleLink: orgLink,
      chips: chips,
      image: imageName,
    };

    let imageRef = ref(storage, `comEngage/${imageName}`);
    await uploadBytes(imageRef, imageURL).then((snapshot) => {
      console.log("Image uploaded!");
    });

    const docRef = doc(db, "professordata", "comEngage");
    await updateDoc(docRef, {
      comEngageOpt: arrayRemove(loadedItem),
    });

    setTitle("");
    setBenefits([]);
    setChips([]);
    setDescription("");
    setOrgLink("");
    setLoadedItem({});
    setImageURL(new File([""], education));
    setImageName("");

    await updateDoc(docRef, {
      comEngageOpt: arrayUnion(toSave),
    });

    setLoading(false);
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    setImageURL(e.target.files[0]);
    setImageName(e.target.files[0].name);
    return false;
  };

  return (
    <>
      <CMSNav />
      <Loading show={loading} />
      <div className="flex flex-row w-screen min-h-screen justify-between">
        <div className="flex flex-col gap-10 items-center border-r border-r-black py-4 px-4">
          <h1 className="text-webGreen rockwell text-2xl">
            Community Engagement
          </h1>
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
            onChange={(e) => setOrgLink(e.target.value)}
            value={orgLink}
          ></input>
          <input
            id="input"
            type="file"
            onChange={(e) => handleImage(e)}
          ></input>
          <button
            className="bg-webGreen rounded p-2 text-white"
            onClick={() => handleSubmit()}
          >
            Save
          </button>
        </div>
        <div className="flex flex-row items-start m-10">
        <ComEngage
          title={title}
          description={description}
          chips={chips}
          benefits={benefits}
          image={URL.createObjectURL(imageURL)}
        />
        </div>
        <div className="flex flex-col gap-10 items-center border-l border-l-black py-4 px-4 w-3/12">
          <ItemsPreview
            document="comEngage"
            editor="comEngage"
            arrayName="comEngageOpt"
            storageBucket="comEngage"
            updater={changeItem}
          />
        </div>
      </div>
    </>
  );
};

export default ComEngageEditor;

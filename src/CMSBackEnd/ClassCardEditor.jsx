import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ClassCard from "../components/ClassCard";
import education from "../images/education.jpeg";
import ItemsPreview from "../components/ItemsPreview";
import ItemsPreviewDropDown from "../components/ItemsPreviewDropDown";
import Loading from "../components/Loading";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../data/firebaseConfiguration";
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

const ClassCardEditor = () => {
  const [description, setDescription] = useState("");
  const [className, setClassName] = useState("");
  const [mode, setMode] = useState("");
  const [schedule, setSchedule] = useState("");
  const [nextOffered, setNextOffered] = useState("");
  const [imageURL, setImageURL] = useState(new File([""], education));
  const [imageName, setImageName] = useState("");
  const [loadedItem, setLoadedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
      navigate("/loginPage");
    }
  });

  function changeItem(params) {
    console.log("Called");
    console.log(params);
    const finalData = JSON.parse(params);
    setDescription(finalData.description);
    setClassName(finalData.class);
    setSchedule(finalData.schedule);
    setNextOffered(finalData.nextOffered);
    setMode(finalData.mode);
    setLoadedItem({
      className: finalData.class,
      description: finalData.description,
      mode: finalData.mode,
      nextOffered: finalData.nextOffered,
      schedule: finalData.schedule,
      image: finalData.img,
    });
  }

  const handleSubmit = async () => {
    setLoading(true);
    const toSave = {
      className: className,
      description: description,
      image: imageName,
      mode: mode,
      nextOffered: nextOffered,
      schedule: schedule,
    };

    console.log(loadedItem);

    let imageRef = ref(storage, `classes/${imageName}`);
    await uploadBytes(imageRef, imageURL).then((snapshot) => {
      console.log("Image uploaded!");
    });

    const docRef = doc(db, "professordata", "ClassCards");
    await updateDoc(docRef, {
      Cards: arrayRemove(loadedItem),
    });

    setClassName("");
    setDescription("");
    setMode("");
    setNextOffered("");
    setSchedule("");
    setLoadedItem({});
    setImageURL(new File([""], education));
    setImageName("");

    await updateDoc(docRef, {
      Cards: arrayUnion(toSave),
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
          <h1 className="text-webGreen rockwell text-2xl">Class Card</h1>
          {/* <input placeholder="Class number" id="class" className="border border-webGreen rounded-sm p-1" value={card} onChange={(e) => setCard(e.target.value)}></input> */}
          <input
            placeholder="class name"
            id="class-name"
            className="border border-webGreen rounded p-1"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          ></input>
          <input
            placeholder="Mode"
            id="mode"
            className="border border-webGreen rounded p-1"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          ></input>
          <input
            placeholder="schedule"
            id="schedule"
            className="border border-webGreen rounded p-1"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          ></input>
          <input
            placeholder="next offered"
            id="next-offered"
            className="border border-webGreen rounded p-1"
            value={nextOffered}
            onChange={(e) => setNextOffered(e.target.value)}
          ></input>
          <textarea
            placeholder="Course Description"
            id="description"
            className="border border-webGreen rounded p-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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
        <div className="flex flex-col items-center gap-20 w-full">
        <div className="h-20 shadow-lg w-full flex flex-row justify-between px-4 items-center">
            <button>+</button>
            <ItemsPreviewDropDown
              document="ClassCards"
              editor="class"
              arrayName="Cards"
              storageBucket="classes"
              updater={changeItem}
            />
            <button className="border-4 rounded-lg border-red-600 p-3 text-red-600">Delete Me</button>
            </div>
          <ClassCard
            class={className}
            descript={description}
            mode={mode}
            schedule={schedule}
            nextOffered={nextOffered}
            classImg={URL.createObjectURL(imageURL)}
          />
        </div>
        {/* <div className="flex flex-col gap-10 items-center border-l border-l-black py-4 px-4 w-3/12">
          <ItemsPreview
            document="ClassCards"
            editor="class"
            arrayName="Cards"
            storageBucket="classes"
            updater={changeItem}
          />
        </div> */}
      </div>
    </>
  );
};

export default ClassCardEditor;

import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ResearchItems from "../components/ResearchItems";
import Loading from "../components/Loading";
import education from "../images/education.jpeg";
import { db, storage } from "../data/firebaseConfiguration";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import ItemsPreview from "../components/ItemsPreview";
import { auth } from "../data/firebaseConfiguration";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ResearchEditor = () => {
  const [articleAuthors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [loadedItem, setLoadedItem] = useState({});
  const [imageURL, setImageURL] = useState(new File([""], education));
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  // type researchToAdd = {
  //     title: any,
  //     abstract: any,
  //     authors: any[],
  //     articleLink: any
  // }

  function addItem() {
    const newList = articleAuthors.concat(
      document.getElementById("authors").value
    );
    document.getElementById("authors").value = "";
    setAuthors(newList);
  }

  function changeItem(params) {
    setTitle(params.articleTitle);
    setAbstract(params.abstract);
    setAuthors(params.author);
    setLoadedItem({
      title: params.articleTitle,
      abstract: params.abstract,
      authors: params.author,
      articleLink: "",
      image: params.img,
    });
  }

  function removeItem(author) {
    const newList = articleAuthors.filter((a) => a != author);
    setAuthors(newList);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const toSave = {
      title: title,
      abstract: abstract,
      authors: articleAuthors,
      articleLink: document.getElementById("link").value,
      image: imageName,
    };

    let imageRef = ref(storage, `research/${imageName}`);
    await uploadBytes(imageRef, imageURL).then((snapshot) => {
      console.log("Image uploaded!");
    });

    const docRef = doc(db, "professordata", "research");
    await updateDoc(docRef, {
      researchArticles: arrayRemove(loadedItem),
    });

    setTitle("");
    setAbstract("");
    setAuthors([]);
    setLoadedItem({});
    setImageURL("");
    setImageName("");

    await updateDoc(docRef, {
      researchArticles: arrayUnion(toSave),
    });
    setLoading(false);
  };

  const handleImage = (e) => {
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
          <h1 className="text-webGreen rockwell text-2xl">Research Article</h1>
          <input
            placeholder="Article Title"
            id="articleTitle"
            className="border border-webGreen rounded p-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <textarea
            placeholder="Abstract"
            id="abstract"
            className="border border-webGreen rounded-sm p-1"
            onChange={(e) => setAbstract(e.target.value)}
            value={abstract}
          ></textarea>
          <div className="flex flex-col gap-1">
            <input
              placeholder="Author"
              id="authors"
              className="border border-webGreen rounded-sm p-1"
            ></input>
            <ul>
              {articleAuthors.map((author) => (
                <li key={author}>
                  {author} <button onClick={() => removeItem(author)}>X</button>
                </li>
              ))}
            </ul>
            <button
              className="bg-webGreen rounded-sm pl-1 pr-1 text-white"
              onClick={() => addItem()}
            >
              Add Author
            </button>
          </div>
          <input
            placeholder="Article Link"
            id="link"
            className="border border-webGreen rounded-sm p-1"
          ></input>
          <input
            id="input"
            type="file"
            onChange={(e) => handleImage(e)}
          ></input>
          <button
            className="bg-webGreen rounded-sm p-2 text-white"
            onClick={() => handleSubmit()}
          >
            Save
          </button>
        </div>
        <ResearchItems
          articleTitle={title}
          abstract={abstract}
          articleLink=""
          authors={articleAuthors}
          image={URL.createObjectURL(imageURL)}
        />
        <div className="flex flex-col gap-10 border-l border-l-black py-4 w-3/12">
          <ItemsPreview
            document="research"
            editor="researchPreview"
            arrayName="researchArticles"
            storageBucket="research"
            updater={changeItem}
          />
        </div>
      </div>
    </>
  );
};

export default ResearchEditor;

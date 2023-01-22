import React, { useState } from "react";
import CMSNav from "../components/CMSNav";
import ResearchItems from "../components/ResearchItems";
import { db } from "../data/firebaseConfiguration";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

const ResearchEditor = () => {
  const [articleAuthors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
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

  const handleSubmit = async () => {
    const toSave = {
      title: title,
      abstract: abstract,
      authors: articleAuthors,
      articleLink: document.getElementById("link").value,
    };

    setTitle("");
    setAbstract("");
    setAuthors([]);
    

    const docRef = doc(db, "professordata", "research");
    await updateDoc(docRef, {
      researchArticles: arrayUnion(toSave),
    });
  };

  return (
    <>
      <CMSNav />
      <div className="flex flex-row items-center justify-center w-screen">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1>Research Article</h1>
          <input
            placeholder="Article Title"
            id="articleTitle"
            className="border border-webGreen rounded-sm p-1"
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
          <input
            placeholder="Author"
            id="authors"
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
            Add Author
          </button>
          <input
            placeholder="Article Link"
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
        <ResearchItems
          articleTitle={title}
          abstract={abstract}
          articleLink=""
          authors={articleAuthors}
        />
      </div>
    </>
  );
};

export default ResearchEditor;

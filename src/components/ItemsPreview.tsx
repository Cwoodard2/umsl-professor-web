import React, {useEffect, useState} from "react";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { db, storage } from "../data/firebaseConfiguration";
import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";
import ClassCard from "./ClassCard";
import ComEngage from "./ComEngage";
import ResearchItems from "./ResearchItems";
import LoadingResearch from "./LoadingResearch";
import ResearchPreview from "./ResearchPreview";
import ComEngagePreview from "./ComEngagePreview";
import ClassCardPreview from "./ClassPreview";

const ItemsPreview = (props: any) => {
const [items, setItems] = useState([]);
const [finalItems, setFinalItems] = useState([]);
const [loading, setLoading] = useState(false);

function updateResponse(params: any) {
  console.log("Called");
  console.log(params);
  props.updater(params)
}

async function handleRemove(toRemove: any) {
  const docRef = doc(db, "professordata", props.document);
  console.log(toRemove);
  await updateDoc(docRef, {
    researchArticles: arrayRemove(toRemove),
  });
}

useEffect(() => {
    const checkForData = async () => {
      console.log(props.document);
      const docToGet: any = doc(db, "professordata", props.document);
      const researchDoc: any = await getDoc(docToGet);
      const data = researchDoc.data();
      console.log(data);
      setItems(data[props.arrayName]);
      const classCardsMade: any = await Promise.all(data[props.arrayName].map(async (article: any) => {
        let imgUrl:any = "";
        try {
          let imageRef = ref(storage, `${props.storageBucket}/${article.image}`);
        await getDownloadURL(imageRef).then((url) => {
          console.log(url);
          imgUrl = url;
        });
        console.log(imgUrl);
        console.log(article.image);
        switch(props.editor) {
          case "class":
            {
              return (
                <div className="flex flex-row">
                <ClassCardPreview
                  class={article.className}
                  descript={article.description}
                  mode={article.mode}
                  nextOffered={article.nextOffered}
                  schedule={article.schedule}
                  classImg={imgUrl}
                  imgFile={article.image}
                  updater={updateResponse}
                />
                 <button onClick={() => handleRemove({
                className: article.className,
                description: article.description,
                mode: article.mode,
                nextOffered: article.nextOffered,
                schedule: article.schedule,
                image: article.image})}>X</button>
                </div>
              );
            }
          case "comEngage":
            {
              return (
                <div>
                <ComEngagePreview
                title={article.title}
                description={article.description}
                chips={article.chips}
                benefits={article.benefits}
                image={imgUrl}
                imgFile={article.image}
                updater={updateResponse}
              />
              <button onClick={() => handleRemove({
                title: article.title,
                description: article.description,
                benefits: article.benefits,
                chips: article.chips,
                articleLink: "",
                image: article.img})}>X</button>
              </div>
              );
            }
          case "research":
            {
              return (
                <div>
                <ResearchItems
                articleTitle={article.title}
                abstract={article.abstract}
                articleLink={article.articleLink}
                authors={article.authors}
                image={imgUrl}
                />
                </div>
              );
            }
          case "researchPreview":
            {
              return (
                <div className="flex flex-row">
                <ResearchPreview
                articleTitle={article.title}
                abstract={article.abstract}
                articleLink={article.articleLink}
                authors={article.authors}
                image={imgUrl}
                imgFile={article.image}
                updater={updateResponse}
                />
                <button onClick={() => handleRemove({
                title: article.title,
                abstract: article.abstract,
                articleLink: article.articleLink,
                authors: article.authors,
                image: article.image})}>X</button>
                </div>
              );
            }
        }
      } catch(error) {
        console.log(error);
      }}))
      console.log(classCardsMade);
      setFinalItems(classCardsMade);
      setLoading(false);
    };
    checkForData();
    // makeList();
  }, []);

  // async function makeClassCards() {
  //   const classCardsMade = await Promise.all(items.map(async (article: any) => {
  //     let imgUrl:any = "";
  //     let imageRef = ref(storage, article.image);
  //     await getDownloadURL(imageRef).then((url) => {
  //       console.log(url);
  //       imgUrl = url;
  //     });
  //     console.log(imgUrl);
  //     return (
  //       <ClassCard
  //         class={article.className}
  //         classNumber={article.classNumber}
  //         descript={article.description}
  //         mode={article.mode}
  //         whenTaught={article.nextOffered}
  //         schedule={article.schedule}
  //         classImg={imgUrl}
  //       />
  //     );
  //   }))
  //   return(classCardsMade);
  // }
  return <div className="flex flex-col items-center">{finalItems}</div>
}

export default ItemsPreview;
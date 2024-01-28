import React, { useEffect, useState } from "react";
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

const ItemsPreviewDropDown = (props: any) => {
  const [items, setItems] = useState([]);
  const [finalItems, setFinalItems] = useState([]);
  const [loading, setLoading] = useState(false);

  function updateResponse(params: any) {
    props.updater(params);
  }

  async function handleRemove(toRemove: any) {
    const docRef = doc(db, "professordata", props.document);
    await updateDoc(docRef, {
      [props.arrayName]: arrayRemove(toRemove),
    });
  }

  useEffect(() => {
    const checkForData = async () => {
      const docToGet: any = doc(db, "professordata", props.document);
      const researchDoc: any = await getDoc(docToGet);
      const data = researchDoc.data();
      setItems(data[props.arrayName]);
      const classCardsMade: any = await Promise.all(
        data[props.arrayName].map(async (article: any) => {
          let imgUrl: any = "";
          try {
            let imageRef = ref(
              storage,
              `${props.storageBucket}/${article.image}`
            );
            await getDownloadURL(imageRef).then((url) => {
              imgUrl = url;
            });
            switch (props.editor) {
              case "class": {
               const value: any = {
                class: article.className,
                descript: article.description,
                mode: article.mode,
                nextOffered: article.nextOffered,
                schedule: article.schedule,
                classImg: imgUrl,
                imgFile: article.image,
                updater: updateResponse,
                }
                return (
                    <option
                      value={value}
                    >
                      {article.class}
                    </option>
                );
              }
              case "comEngage": {
                return (
                  <div>
                    <ComEngagePreview
                      title={article.title}
                      description={article.description}
                      chips={article.chips}
                      benefits={article.benefits}
                      orgLink={article.orgLink}
                      image={imgUrl}
                      imgFile={article.image}
                      updater={updateResponse}
                    />
                    <button
                      onClick={() =>
                        handleRemove({
                          title: article.title,
                          description: article.description,
                          benefits: article.benefits,
                          chips: article.chips,
                          articleLink: "",
                          image: article.image,
                        })
                      }
                    >
                      X
                    </button>
                  </div>
                );
              }
              case "research": {
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
              case "researchPreview": {
                const value: any = {
                  articleTitle: article.title,
                      abstract: article.abstract,
                      articleLink: article.articleLink,
                      authors: article.authors,
                      image: imgUrl,
                      imgFile: article.image,
                      updater: updateResponse
                  }
                  const finalValue = JSON.stringify(value);

                      return (
                          <option
                            value={finalValue}
                          >
                            {article.title}
                          </option>
                      );
              
              }
            }
          } catch (error) {
            console.log(error);
          }
        })
      );
      console.log(classCardsMade);
      setFinalItems(classCardsMade);
      setLoading(false);
    };
    checkForData();
    // makeList();
  }, []);

  return <select id="itemPreview" className="p-2 rounded-lg bg-white border-webGreen border-4 text-webGreen font-bold" onChange={(event) => updateResponse(event.target.value)}>{finalItems}</select>;
};

export default ItemsPreviewDropDown;

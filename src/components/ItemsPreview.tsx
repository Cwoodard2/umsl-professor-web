import React, {useEffect, useState} from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../data/firebaseConfiguration";
import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";
import ClassCard from "./ClassCard";
import ComEngage from "./ComEngage";
import ResearchItems from "./ResearchItems";
import LoadingResearch from "./LoadingResearch";

const ItemsPreview = (props: any) => {
const [items, setItems] = useState([]);
const [finalItems, setFinalItems] = useState([]);
const [loading, setLoading] = useState(false);

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
        switch(props.editor) {
          case "class":
            {
              return (
                <ClassCard
                  class={article.className}
                  descript={article.description}
                  mode={article.mode}
                  nextOffered={article.nextOffered}
                  schedule={article.schedule}
                  classImg={imgUrl}
                />
              );
            }
          case "comEngage":
            {
              return (
                <ComEngage
                title={article.title}
                description={article.description}
                chips={article.chips}
                benefits={article.benefits}
                image={imgUrl}
              />
              );
            }
          case "research":
            {
              return (
                <ResearchItems
                articleTitle={article.title}
                abstract={article.abstract}
                articleLink={article.articleLink}
                authors={article.authors}
                image={imgUrl}
                />
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
  return <>{finalItems}</>
}

export default ItemsPreview;
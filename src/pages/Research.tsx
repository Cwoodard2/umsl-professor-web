import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import researchImage from "../images/research2.jpeg";
import ResearchItems from "../components/ResearchItems";
import SearchBar from "../components/Searchbar";
import { db, storage } from "../data/firebaseConfiguration";
import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";
import LoadingResearch from "../components/LoadingResearch";

const Research = () => {
  //   let scholar = require('google-scholar-extended')
  const [articles, setResearchArticles] = useState<any>([]);
  const [finalArticles, setFinalArticles] = useState<any>([]);
  const [scholarFacts, setScholarFacts] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkForData = async () => {
      setLoading(true);
      // scholar.profile('nOnDaasAAAAJ').then((resultsObj: any) => {
      //   console.log(resultsObj)
      // })
      const docToGet: any = doc(db, "professordata", "research");
      const researchDoc: any = await getDoc(docToGet);
      const data = researchDoc.data();
      setResearchArticles(data.researchArticles);
      const classCardsMade: any = await Promise.all(
        data.researchArticles.map(async (article: any) => {
          let imgUrl: any = "";
          try {
            let imageRef = ref(storage, `research/${article.image}`);
            await getDownloadURL(imageRef).then((url) => {
              console.log(url);
              imgUrl = url;
            });
            console.log(imgUrl);
            return (
              <ResearchItems
                articleTitle={article.title}
                abstract={article.abstract}
                articleLink={article.articleLink}
                authors={article.authors}
                image={imgUrl}
              />
            );
          } catch (error) {
            console.log(error);
          }
        })
      );
      setFinalArticles(classCardsMade);
      setLoading(false);
    };
    checkForData();
    // makeList();
  }, []);

  //fix this
  const filterList = async (filterCriteria: string) => {
    setLoading(true);
    // console.log(articles[2].title);
    console.log("article".toLowerCase().includes("ARTICLE".toLowerCase()));
    if (filterCriteria != "") {
      const filteredList = articles.filter(
        (article: any) =>
          // console.log(typeof thisVar);
          article.title.includes(filterCriteria.toLowerCase())
        // article.title === filterCriteria
      );

      const finalList = await Promise.all(
        filteredList.map(async (article: any) => {
          let imgUrl: any = "";
          try {
            let imageRef = ref(storage, `research/${article.image}`);
            await getDownloadURL(imageRef).then((url) => {
              console.log(url);
              imgUrl = url;
            });
            console.log(imgUrl);
            return (
              <ResearchItems
                articleTitle={article.title}
                abstract={article.abstract}
                articleLink={article.articleLink}
                authors={article.authors}
                image={imgUrl}
              />
            );
          } catch (error) {
            console.log(error);
          }
        })
      );
      console.log(filteredList);
      setFinalArticles(finalList);
      setLoading(false);
    } else {
      console.log(articles);
      setFinalArticles(finalArticles);
      setLoading(false);
    }
  };

  return (
    <StandardPage>
      <div className="w-screen flex flex-col md:flex-row justify-between items-start bg-white p-16 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-webGreen rockwell text-4xl">Research</h1>
          <p className="text-black">
            Discover the research that I partake in and the potential effects of
            it.
          </p>
          {/* <p>Quick Facts</p> */}
        </div>
        <img
          src={researchImage}
          className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SearchBar filter={filterList} />
      </div>
      {loading ? (
        <ul>
          <li>
            <LoadingResearch />
          </li>
        </ul>
      ) : (
        <div>{finalArticles}</div>
      )}
      {/* <ul>
        {finalArticles.map((article: any) => (
      <li className="list-none">
        <ResearchItems
          articleTitle={article.title}
          abstract={article.abstract}
          articleLink={article.articleLink}
          authors={article.authors}
        />
      </li>
    ))}
    </ul> */}
    </StandardPage>
  );
};

export default Research;

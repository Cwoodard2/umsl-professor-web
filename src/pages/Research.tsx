import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import researchImage from "../images/research2.jpeg";
import SearchBar from "../components/Searchbar";
import MainContentHolder from "../components/MainContentHolder";
import PageTitleWrapper from "../components/PageTitleWrapper";
import { db } from "../data/firebaseConfiguration";
import LoadingResearch from "../components/LoadingResearch";
import { loadItems } from "../data/LoadingFunctions";

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
      const classCardsMade: any = await loadItems(data.researchArticles, "research");
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

      const finalList = await loadItems(filteredList, "research");
      setFinalArticles(finalList);
      setLoading(false);
    } else {
      setFinalArticles(finalArticles);
      setLoading(false);
    }
  };

  return (
    <StandardPage>
      {/* <div className="w-screen flex flex-col md:flex-row justify-between items-start bg-white p-16 md:px-48 md:py-16 gap-10"> */}
      <PageTitleWrapper>
        <div className="flex flex-col gap-2">
          <h1 className="text-white rockwell text-4xl md:text-6xl">Research</h1>
          <p className="text-white text-lg">
            Discover the research that I partake in and the potential effects of
            it.
          </p>
          {/* <h1 className="text-webGreen rockwell text-2xl md:text-5xl">Discover my research and the potential effects of
            it.</h1>
          <p className="text-black text-lg">
            Discover the research that I partake in and the potential effects of
            it.
          </p> */}
          {/* <p>Quick Facts</p> */}
          {/* <p>135 Citations, 6 Published Articles</p> */}
        </div>
        <img
          src={researchImage}
          className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
      </PageTitleWrapper>
      {/* <div className="flex flex-col items-center justify-center">
        <SearchBar filter={filterList} />
      </div> */}
      {loading ? (
        <ul>
          <li>
            <LoadingResearch />
          </li>
        </ul>
      ) : (
        <MainContentHolder>{finalArticles}</MainContentHolder>
        // grid grid-flow-row grid-cols-2 items-center justify-center
      )}
    </StandardPage>
  );
};

export default Research;

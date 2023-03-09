import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import researchImage from "../images/research2.jpeg";
import ResearchItems from "../components/ResearchItems";
import SearchBar from "../components/Searchbar";
import { db, storage } from "../data/firebaseConfiguration";
import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";

const Research = () => {
  const [articles, setResearchArticles] = useState<any>([]);
  const [finalArticles, setFinalArticles] = useState<any>([]);

  useEffect(() => {
    const checkForData = async () => {
      const docToGet: any = doc(db, "professordata", "research");
      const researchDoc: any = await getDoc(docToGet);
      const data = researchDoc.data();
      setResearchArticles(data.researchArticles);
      const classCardsMade: any = await Promise.all(data.researchArticles.map(async (article: any) => {
        let imgUrl:any = "";
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
      } catch(error) {
        console.log(error);
      }}))
      setFinalArticles(classCardsMade);
    };
    checkForData();
    // makeList();
  }, []);

  // function makeList() {
  //   const articleArray = articles.map((article: any) => (
  //     <li className="list-none">
  //       <ResearchItems
  //         articleTitle={article.title}
  //         abstract={article.abstract}
  //         articleLink={article.articleLink}
  //         authors={article.authors}
  //       />
  //     </li>
  //   ));
  //   setFinalArticles(articleArray);
  //};

  //fix this
  const filterList = async (filterCriteria: string) => {
    // console.log(articles[0].title.toLowerCase().includes(filterCriteria.toLowerCase()));
    // console.log("article.title".toLowerCase().includes("ARTICLE".toLowerCase()))
    if (filterCriteria != "") {
      const filteredList = articles.filter((article: any) =>
      // let thisVar = article['title'];
      // console.log(typeof thisVar);
      // thisVar.includes(filterCriteria.toLowerCase())
      article.title === filterCriteria
    );

    const finalList = await Promise.all(filteredList.map(async (article: any) => {
      let imgUrl:any = "";
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
    } catch(error) {
      console.log(error);
    }}))
    console.log(filteredList)
    setFinalArticles(finalList);
    } else {
    setFinalArticles(finalArticles);
    }

  };

//   const articlesToShow = makeList();
//   console.log(articlesToShow);

  // while (finalArticles.length == 0) {
  //   return (<h1>Loading</h1>);
  // }

  return (
    <StandardPage>
      <div className="w-screen flex flex-col md:flex-row justify-around items-start bg-white p-16 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-webGreen rockwell text-4xl">Research</h1>
          <p className="text-black">
            Discover the research that I partake in and the potential effects of
            it.
          </p>
          <SearchBar filter={filterList} />
        </div>
        <img
          src={researchImage}
          className="w-3/3 h-3/5 md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
      </div>
      <div className="flex flex-col"></div> 
      {finalArticles}
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

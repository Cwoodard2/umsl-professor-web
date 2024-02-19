import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link as A } from "react-scroll";
import StandardPage from "../components/StandardPage";
import ComEngageFilterNew from "../components/ComEngageFilterNew";
import MainContentHolder from "../components/MainContentHolder";
import PageTitleWrapper from "../components/PageTitleWrapper";
import LoadingItems from "../components/LoadingItems";
import communityImage from "../images/communityengagement.png";
import { db } from "../data/firebaseConfiguration";
import { loadItems } from "../data/LoadingFunctions";

const CommunityEngagement = () => {
  const [comEngageItems, setComEngageItems] = useState([]);
  const [finalComEngageItems, setFinalComEngageItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkForData = async () => {
      setLoading(true);
      const docToGet: any = doc(db, "professordata", "comEngage");
      const comEngageDoc: any = await getDoc(docToGet);
      const data = comEngageDoc.data();
      setComEngageItems(data.comEngageOpt);
      const classCardsMade: any = await loadItems(data.comEngageOpt, "comEngage");
      setFinalComEngageItems(classCardsMade);
      setLoading(false);
    };
    checkForData();
  }, []);

  const filterList = async (filterCriteria: string []) => {
    console.log(filterCriteria);
    setLoading(true);
    console.log(filterCriteria);
    if (filterCriteria.length !== 0) {
      const filteredList = comEngageItems.filter((article: any) => 
        // filterCriteria.forEach(element => {
        //   console.log(element);
        //   console.log(article.chips.includes('Housing'));
        //   // console.log(article.chips);
        //   return article.chips.includes(element);
        // });
        filterCriteria.sort().toString() == article.chips.sort().toString()
      
        // let thisVar = article['title'];
        // console.log(typeof thisVar);
        // thisVar.includes(filterCriteria.toLowerCase())
      );

      const classCardsMade: any = await loadItems(filteredList, "comEngage");
      setFinalComEngageItems(classCardsMade);
      setLoading(false);
    } else {
      setComEngageItems(finalComEngageItems);
      setLoading(false);
    }
  };

  return (
    <StandardPage>
      <PageTitleWrapper>
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-white rockwell text-4xl md:text-6xl">
              Community Engagement
            </h1>
            <p className="text-white text-lg">
              Learn the various ways that I connect to my community, and the
              effect it has.
            </p>
          </div>
          <div>
            <A to="filter" spy={true} smooth={true}>
              <button className="bg-webGreen border-white border-2 p-2 rounded-md text-white font-bold hover:bg-white hover:text-webGreen transition-all">
                Learn More
              </button>
            </A>
          </div>
        </div>
        <img
          src={communityImage}
          className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe"
        ></img>
      </PageTitleWrapper>
      {/* <ComEngageFilterNew tags={["Housing", "Urban"]} filter={filterList} /> */}
      {loading ? (
        <LoadingItems />
      ) : (
        <MainContentHolder>
          {/* <ComEngageFilterNew tags={["Housing", "Urban"]} filter={filterList} /> */}
          {finalComEngageItems}
        </MainContentHolder>
      )}
    </StandardPage>
  );
};

export default CommunityEngagement;

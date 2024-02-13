import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link as A } from "react-scroll";
import StandardPage from "../components/StandardPage";
import ComEngageFilterNew from "../components/ComEngageFilterNew";
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

  const filterList = async (filterCriteria: string) => {
    setLoading(true);
    if (filterCriteria != "") {
      const filteredList = comEngageItems.filter((article: any) =>
        // let thisVar = article['title'];
        // console.log(typeof thisVar);
        // thisVar.includes(filterCriteria.toLowerCase())
        article.chips.includes(filterCriteria)
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
      <div className="w-screen flex flex-col md:flex-row md:justify-between items-start bg-white p-8 md:py-16 md:px-48 gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-webGreen rockwell text-4xl md:text-6xl">
              Community Engagement
            </h1>
            <p className="text-black text-lg">
              Learn the various ways that I connect to my community, and the
              effect it has.
            </p>
          </div>
          <div>
            <A to="filter" spy={true} smooth={true}>
              <button className="bg-webGreen border-webGreen border-2 p-2 rounded-md text-white hover:bg-white hover:text-webGreen transition-all">
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
      </div>
      <ComEngageFilterNew tags={["Housing", "Urban"]} filter={filterList} />
      {loading ? (
        <LoadingItems />
      ) : (
        <div className="flex md:flex-row flex-col gap-10 m-4 flex-wrap justify-center items-center sm:items-stretch">
          {/* <ComEngageFilterNew tags={["Housing", "Urban"]} filter={filterList} /> */}
          {finalComEngageItems}
        </div>
      )}
    </StandardPage>
  );
};

export default CommunityEngagement;

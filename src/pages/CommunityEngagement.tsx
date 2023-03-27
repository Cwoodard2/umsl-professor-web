import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link as A } from "react-scroll";
import StandardPage from "../components/StandardPage";
import ComEngage from "../components/ComEngage";
import ComEngageFilter from "../components/ComEngageFilter";
import communityImage from "../images/communityengagement.png";
import { db, storage } from "../data/firebaseConfiguration";
import { ref, getDownloadURL } from "firebase/storage";

const CommunityEngagement = () => {
  const [comEngageItems, setComEngageItems] = useState([]);
  const [finalComEngageItems, setFinalComEngageItems] = useState([]);
  useEffect(() => {
    const checkForData = async () => {
      const docToGet: any = doc(db, "professordata", "comEngage");
      const comEngageDoc: any = await getDoc(docToGet);
      const data = comEngageDoc.data();
      console.log(data.comEngageOpt);
      setComEngageItems(data.comEngageOpt);
      const classCardsMade: any = await Promise.all(data.comEngageOpt.map(async (activity: any) => {
        let imgUrl:any = "";
        try {
          let imageRef = ref(storage, `comEngage/${activity.image}`);
        await getDownloadURL(imageRef).then((url) => {
          console.log(url);
          imgUrl = url;
        });
        console.log(imgUrl);
        return (
          <ComEngage
          title={activity.title}
          description={activity.description}
          chips={activity.chips}
          benefits={activity.benefits}
          image={imgUrl}
        />
        );
      } catch(error) {
        console.log(error);
      }}))
      setFinalComEngageItems(classCardsMade);
    };
    checkForData();
  }, []);

  const makeList = () => {
    const articleArray = comEngageItems.map((activity: any) => (
      <li className="list-none">
        <ComEngage
          title={activity.title}
          description={activity.description}
          chips={activity.chips}
          benefits={activity.benefits}
        />
      </li>
    ));
    console.log(articleArray);
    return articleArray;
  };
  console.log(comEngageItems[0]);

  const articlesToShow = makeList();
  console.log(articlesToShow);

  const filterList = async (filterCriteria: string) => {
    // console.log(articles[0].title.toLowerCase().includes(filterCriteria.toLowerCase()));
    // console.log("article.title".toLowerCase().includes("ARTICLE".toLowerCase()))
    if (filterCriteria != "") {
      const filteredList = comEngageItems.filter((article: any) =>
      // let thisVar = article['title'];
      // console.log(typeof thisVar);
      // thisVar.includes(filterCriteria.toLowerCase())
      article.chips.includes(filterCriteria)
    );

    const classCardsMade: any = await Promise.all(filteredList.map(async (activity: any) => {
      let imgUrl:any = "";
      try {
        let imageRef = ref(storage, `comEngage/${activity.image}`);
      await getDownloadURL(imageRef).then((url) => {
        console.log(url);
        imgUrl = url;
      });
      console.log(imgUrl);
      return (
        <ComEngage
        title={activity.title}
        description={activity.description}
        chips={activity.chips}
        benefits={activity.benefits}
        image={imgUrl}
      />
      );
    } catch(error) {
      console.log(error);
    }}))
    setFinalComEngageItems(classCardsMade);
  } else {
    setComEngageItems(finalComEngageItems)
  }
  };

  return (
    <StandardPage>
      <div className="w-screen flex flex-col md:flex-row md:justify-around items-start bg-white p-16 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-webGreen rockwell text-4xl">
            Community Engagement
          </h1>
          <p className="text-black">
            Learn the various ways that I connect to my community, and the
            effect it has.
          </p>
          <div>
            <A to="filter" spy={true} smooth={true}>
              <button className="bg-webGreen border-webGreen border-4 p-1 rounded-md text-white">
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
      <ComEngageFilter tags={["Housing", "Urban"]} filter={filterList} />
      {finalComEngageItems}
    </StandardPage>
  );
};

export default CommunityEngagement;

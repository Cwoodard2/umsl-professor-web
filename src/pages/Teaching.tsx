import React, { useState, useEffect } from "react";
import { Link as A } from "react-scroll";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import ClassCard from "../components/ClassCard";
import TeachingSection from "../components/TeachingSection";
import EducationSection from "../components/EducationSection";
import CourseHighlight from "../components/CourseHighlight";
import teachingImage from "../images/TEACHING.png";
import { db, storage } from "../data/firebaseConfiguration";
import { listAll, ref, getStorage, getDownloadURL } from "firebase/storage";

const Teaching = () => {
  const [classes, setClasses] = useState([]);
  const [finalArticles, setFinalArticles] = useState<any>([]);
  const [imgToShow, setImgToShow] = useState<any>("");
  const [classCards, setClassCards] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    const checkForData = async () => {
      const docToGet: any = doc(db, "professordata", "ClassCards");
      const researchDoc: any = await getDoc(docToGet);
      const data = researchDoc.data();
      setClasses(data.Cards);
      const classCardsMade: any = await Promise.all(data.Cards.map(async (article: any) => {
        let imgUrl:any = "";
        try {
          let imageRef = ref(storage, `classes/${article.image}`);
        await getDownloadURL(imageRef).then((url) => {
          console.log(url);
          imgUrl = url;
        });
        console.log(imgUrl);
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
      } catch(error) {
        console.log(error);
      }}))
      console.log(classCardsMade);
      setClassCards(classCardsMade);
      setLoading(false);
    };
    checkForData();
    // makeList();
  }, []);

  async function makeClassCards() {
    const classCardsMade = await Promise.all(classes.map(async (article: any) => {
      let imgUrl:any = "";
      let imageRef = ref(storage, article.image);
      await getDownloadURL(imageRef).then((url) => {
        console.log(url);
        imgUrl = url;
      });
      console.log(imgUrl);
      return (
        <ClassCard
          class={article.className}
          classNumber={article.classNumber}
          descript={article.description}
          mode={article.mode}
          whenTaught={article.nextOffered}
          schedule={article.schedule}
          classImg={imgUrl}
        />
      );
    }))
    return(classCardsMade);
  }

  // const makeList = () => {
  //   const articleArray = classes.map((article: any) => (
  //     <li className="list-none">
  //       <ClassCard
  //         class={article.className}
  //         classNumber={article.classNumber}
  //         descript={article.description}
  //         mode={article.mode}
  //         whenTaught={article.nextOffered}
  //         schedule={article.schedule}
  //       />
  //     </li>
  //   ));
  //   setFinalArticles(articleArray);
  // };

  return (
    <StandardPage>
      <div className="w-screen flex flex-col md:flex-row justify-between items-start bg-white p-8 md:p-16 gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-webGreen rockwell text-4xl">Teaching</h1>
          <p className="text-black">
            Explore the ways I impact my students and the experience that I have
            in higher education
          </p>
          <div className="flex gap-3">
            <A to="Philosophy" spy={true} smooth={true}>
              <button className="bg-webGreen border-webGreen border-4 p-1 rounded-md text-white font-semibold">
                Philosophy
              </button>
            </A>
            <A to="Experience" spy={true} smooth={true}>
              <button className="border-webGreen border-4 p-1 rounded-md text-webGreen font-semibold">
                Education
              </button>
            </A>
          </div>
        </div>
        <img
          src={teachingImage}
          className="w-3/3 h-5/5 md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover"
          alt="Elaina Johns-Wolfe teaching"
        ></img>
      </div>
      <div className="flex flex-col gap-10">
        <TeachingSection title="Philosophy" />
        {/* <EducationSection title="Experience" /> */}
        <CourseHighlight />
      </div>
      <div className="p-8 md:p-16">
        <h2 className="rockwell text-3xl">Experience</h2>
        <p>During my time at the University of Cincinnati and University of Missouri-St. Louis, I have created and taught ten distinct courses. Please check out my current teaching rotation below.</p>
        <br></br>
        <h3 className="rockwell text-2xl">Classes Taught</h3>
        <div className="flex flex-row gap-10 py-4 overflow-auto md:flex-wrap">
          {loading ? <p>loading</p> : classCards}
          {/* {imgToShow} */}
          {/* <ClassCard
            class="2202"
            whenTaught="Spring"
            descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ClassCard class="2202" whenTaught="Spring" />
          <ClassCard class="2202" whenTaught="Spring" />
          <ClassCard
            class="2202"
            whenTaught="Spring"
            mode="Online"
            nextOffered=""
            descript="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ClassCard class="2202" whenTaught="Spring" />
          <ClassCard class="2202" whenTaught="Spring" /> */}
        </div>
      </div>
    </StandardPage>
  );
};

export default Teaching;

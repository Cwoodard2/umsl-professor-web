import React, { useState, useEffect } from "react";
import { Link as A } from "react-scroll";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import TeachingSection from "../components/TeachingSection";
import CourseHighlight from "../components/CourseHighlight";
import teachingImage from "../images/TEACHING.png";
import { db } from "../data/firebaseConfiguration";
import LoadingClasses from "../components/LoadingClasses";
import { loadItems } from "../data/LoadingFunctions";

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
      const classCardsMade: any = await loadItems(data.Cards, "classes");
      setClassCards(classCardsMade);
      setLoading(false);
    };
    checkForData();
    // makeList();
  }, []);

  return (
    <StandardPage>
      <div className="w-screen flex flex-col md:flex-row justify-between items-start bg-white p-8 md:py-16 md:px-48 gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-webGreen rockwell text-4xl md:text-6xl">Teaching</h1>
            <p className="text-black text-lg">
              Explore the ways I impact my students and the experience that I have
              in higher education
            </p>
          </div>
          <div className="flex gap-3">
            <A to="Philosophy" spy={true} smooth={true}>
              <button className="bg-webGreen border-webGreen border-2 p-2 rounded-md text-white font-semibold hover:bg-webGreenDark hover:border-webGreenDark transition-all">
                Philosophy
              </button>
            </A>
            <A to="Experience" spy={true} smooth={true}>
              <button className="border-webGreen border-2 p-2 rounded-md text-webGreen font-semibold hover:bg-webGreen hover:bg-opacity-10 transition-all">
                Experience
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
        <CourseHighlight />
      </div>
      <div className="p-8 md:py-16 md:px-48">
        <h2 className="rockwell text-3xl" id="Experience">
          Experience
        </h2>
        <p>
          During my time at the University of Cincinnati and University of
          Missouri-St. Louis, I have created and taught ten distinct courses.
          Please check out my current teaching rotation below.
        </p>
        <br></br>
        <h3 className="rockwell text-2xl">Classes Taught</h3>
        <div className="flex flex-row md:justify-center gap-10 py-4 overflow-auto md:flex-wrap">
          {loading ? (
            <>
              <LoadingClasses />
              <LoadingClasses />
              <LoadingClasses />
              <LoadingClasses />
            </>
          ) : (
            classCards
          )}
        </div>
      </div>
    </StandardPage>
  );
};

export default Teaching;

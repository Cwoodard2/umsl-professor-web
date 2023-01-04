import React, {useState, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import StandardPage from "../components/StandardPage";
import researchImage from '../images/research2.jpeg';
import ResearchItems from "../components/ResearchItems";
import SearchBar from "../components/Searchbar";
import {db} from "../data/firebaseConfiguration";

const Research = () => {
    const [articles, setResearchArticles] = useState([{}]);

    useEffect(() => {
        const checkForData = async () => {
            const docToGet: any = doc(db, 'professordata', 'research');
            const researchDoc: any = await getDoc(docToGet);
            const data = researchDoc.data();
            console.log(data.researchArticles);
            setResearchArticles(data.researchArticles);
        }
        checkForData();
    }, []);

    const makeList = () => {
        const articleArray = articles.map((article: any) => <li className="list-none"><ResearchItems articleTitle={article.title} abstract={article.abstract} articleLink={article.articleLink} authors={article.authors}/></li>);
        console.log(articleArray);
        return articleArray;
    }
    console.log(articles[0]);
    const stringArray: string[] = ['sting'];

    const articlesToShow = makeList();
    console.log(articlesToShow);

    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-col md:flex-row justify-around items-start bg-white p-16 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">Research</h1>
                    <p className="text-black">Discover the research that I partake in and the potential effects of it.</p>
                    <SearchBar />
                </div>
                <img src={researchImage} className="w-3/3 h-3/5 md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
            </div>
            <div className="flex flex-col">
                <ResearchItems articleTitle="First Article Title" abstract="This is the abstract"/>
                <ResearchItems articleTitle="Second Article Title" abstract="This is the abstract"/>
                <ResearchItems articleTitle="Third Article Title" abstract="This is the abstract"/>
            </div>
            <div>{articlesToShow}</div>
        </StandardPage>
    );
};

export default Research;
import React, {useState, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import {Link as A} from "react-scroll";
import StandardPage from "../components/StandardPage";
import ComEngage from "../components/ComEngage";
import ComEngageFilter from "../components/ComEngageFilter";
import communityImage from '../images/communityengagement.png';
import {db} from "../data/firebaseConfiguration";

const CommunityEngagement = () => {
    const [comEngageItems, setComEngageItems] = useState([]);

    useEffect(() => {
        const checkForData = async () => {
            const docToGet: any = doc(db, 'professordata', 'comEngage');
            const comEngageDoc: any = await getDoc(docToGet);
            const data = comEngageDoc.data();
            console.log(data.comEngageOpt);
            setComEngageItems(data.comEngageOpt);
        }
        checkForData();
    }, []);

    const makeList = () => {
        const articleArray = comEngageItems.map((activity: any) => <li className="list-none"><ComEngage title={activity.title} description={activity.description} chips={activity.chips} benefits={activity.benefits}/></li>);
        console.log(articleArray);
        return articleArray;
    }
    console.log(comEngageItems[0]);

    const articlesToShow = makeList();
    console.log(articlesToShow);

    return (
        <StandardPage>
            <div className="w-screen h-screen flex flex-col md:flex-row md:justify-around items-start bg-white p-16 gap-10">
                <div className="flex flex-col">
                    <h1 className="text-webGreen rockwell text-4xl">Community Engagement</h1>
                    <p className="text-black">Learn the various ways that I connect to my community, and the effect it has.</p>
                    <div>
                        <A to="filter" spy={true} smooth={true}>
                            <button className="bg-webGreen border-webGreen border-4 p-1 rounded-md text-white">Learn More</button>
                        </A>
                    </div>
                </div>
                <img src={communityImage} className="w-3/3 h-auto md:w-1/3 md:h-3/5 rounded-md shadow-md object-cover" alt="Elaina Johns-Wolfe"></img>
            </div>
            <ComEngageFilter tags={["Housing"]}/>
            <ComEngage title="Option 1" description="First Description"/>
            <ComEngage title="Option2" description="Second Description"/>
            <ComEngage title="Option 3" description="Third Description"/>
            {articlesToShow}
        </StandardPage>
    );
};

export default CommunityEngagement;
import ComEngage from "../components/ComEngage";
import ClassCard from "../components/ClassCard";
import ResearchItems from "../components/ResearchItems";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../data/firebaseConfiguration";

export const loadItems = async (mapList: any, document: string) => {
  const finalList: any = await Promise.all(
    mapList.map(async (activity: any) => {
      let imgUrl: any = "";
      try {
        let imageRef = ref(storage, `${document}/${activity.image}`);
        await getDownloadURL(imageRef).then((url) => {
          imgUrl = url;
        });
        switch (document) {
          case "comEngage":
            return (
              <ComEngage
                title={activity.title}
                description={activity.description}
                chips={activity.chips}
                benefits={activity.benefits}
                image={imgUrl}
              />
            );
          case "research":
            return (
              <ResearchItems
                articleTitle={activity.title}
                abstract={activity.abstract}
                articleLink={activity.articleLink}
                authors={activity.authors}
                image={imgUrl}
              />
            );
          case "classes":
            return (
              <ClassCard
                class={activity.className}
                descript={activity.description}
                mode={activity.mode}
                nextOffered={activity.nextOffered}
                schedule={activity.schedule}
                classImg={imgUrl}
              />
            );
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
  return finalList;
};

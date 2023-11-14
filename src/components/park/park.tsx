import React, { useState, useEffect } from "react";
import styles from "./park.module.css";
import parksData from "../../json/parksData.json";

interface ParkProps {
  match: {
    params: {
      id: string;
    };
  };
}

interface ParkData {
  id: number;
  name: string;
  description: string;
  posts: ParkPost[];
}

interface ParkPost {
  title: string;
  text: string;
  image: string;
}

const Park2: React.FC<ParkProps> = (props) => {
  const [park, setPark] = useState<ParkData | null>(null);

  const extractParkData = () => {
    const newId = +props.match?.params?.id;
    const newPark = parksData.parks?.find((park) => park.id === newId) || null;
    setPark(newPark);
  };

  useEffect(() => {
    extractParkData();
  }, [props.match?.params?.id]);

  return (
    <>
      {park && (
        <>
          <div className={"titleContainer"}>
            <h1 className={styles.title}>{park.name}</h1>
          </div>
          <div className={styles.parkContainer}>
            <p>{park.description}</p>
            <div className={styles.posts}>
              {park.posts.map((post, index) => {
                const image = (
                  <img
                    src={post.image}
                    className={styles.postImage}
                    alt={post.title}
                  ></img>
                );
                return (
                  <div className={styles.postContainer} key={index}>
                    {index % 2 === 1 ? image : ""}
                    <div className={styles.postText}>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <p>{post.text}</p>
                    </div>
                    {index % 2 === 0 ? image : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Park2;

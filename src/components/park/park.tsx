import React, { Component } from "react";
import styles from "./park.module.css";
import parksData from "../../json/parksData.json";
interface ParkProps {
  match: {
    params: {
      id: string;
    },
  },
}

 interface ParkState {
  park: ParkData;  
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

class Park extends Component<ParkProps, ParkState> {

  constructor(props: ParkProps) {
    super(props);
    const newId = +this.props.match?.params?.id;
    const newPark = parksData.parks?.filter((park) => park.id === newId)[0]
    this.state = {
      park: newPark,
    } 
  }

  extractParkData(){
    const newId = +this.props.match?.params?.id;
    const newPark = parksData.parks?.filter((park) => park.id === newId)[0]
    this.setState({
      park: newPark,
    })
  } 

  componentDidUpdate(prevProps: ParkProps, prevState: ParkState) {
      if(prevProps.match?.params?.id != this.props.match?.params?.id){
        this.extractParkData()
      }
  } 

  render() {
    return (
      <>
        <div className={"titleContainer"}>
          <h1 className={styles.title}>{this.state.park.name}</h1>
        </div>
        <div className={styles.parkContainer}>
          <p>{this.state.park.description}</p>
          <div className={styles.posts}>
            {this.state.park.posts.map((post, index) => {
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
    );
  }
}

export default Park;

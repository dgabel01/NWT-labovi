//funkcionalna komponenta lab6

import * as React from 'react';
import styles from "./comments.module.css";


export interface CommentsProps {

}

export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    error: any;
}


interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments2:React.FC<CommentsProps> = () =>{

    const[comments, setComments] = React.useState<Comment[]>([]);   
    const[isLoading, setLoading] = React.useState<boolean>(false);


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");

                if (!response.ok) {
                    throw new Error("Something went wrong ...");
                }

                const data = await response.json();
                setComments(data.slice(0, 15));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []); 
    return(
        <>
                <div className="titleContainer">
                <h1 className={styles.title}>Komentari :</h1>
                </div>
                <div className={styles.commentsContainer}>
                    {   isLoading
                        ? "Komentari se učitavaju..." 
                            : comments.map((comment: Comment) => (
                                <div key={comment.id} className={styles.commentContainer}>
                                    <div className={styles.commentPersonal}>
                                        <div className={styles.commentEmail}>
                                            <strong>E-mail : </strong>
                                            {comment.email}
                                        </div>
                                        <img
                                            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ="
                                            className={styles.commentImage}
                                            alt={comment.name}
                                        ></img>
                                    </div>
                                    <div className={styles.commentBody}>{comment.body}</div>
                                </div>
                            ))}
                </div>
            </>

    );
}



export default Comments2;
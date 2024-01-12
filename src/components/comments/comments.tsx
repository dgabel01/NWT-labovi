import * as React from 'react';
import styles from "./comments.module.css";
import AddComment from './addcomment';


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

class Comments extends React.Component<CommentsProps, CommentsState> {
    constructor(props: CommentsProps) {
        super(props);
        this.state = {
            comments: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong ...");
                }
            })
            .then((data) =>
                this.setState({ comments: data.slice(0, 10), isLoading: false })
            )
            .catch((error) => this.setState({ error, isLoading: false }));
    }

    addComment = (email:string, comment:string) => {
        this.setState({
            comments:[
                ...this.state.comments, //spread
                {
                    postId:0,
                    id: this.state.comments.length +1,
                    name:'',
                    email,
                    body:  comment,
                },
            ],
           
        });
    };

    render() {
        return (
            <>
                <div className="titleContainer">
                    <h1 className={styles.title}>Komentari :</h1>
                </div>
                <div className={styles.commentsContainer}>
                    {this.state.isLoading
                        ? "Komentari se učitavaju..."
                        : this.state.error && !this.state.comments
                            ? "Došlo je do greške pri učitavanju komentara."
                            : this.state.comments.map((comment: Comment) => (
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
                <AddComment submitHandler={(email, comment)=>this.addComment(email,comment)}></AddComment>
            </>
        );
    }
}

export default Comments;
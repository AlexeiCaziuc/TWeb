import React, {useContext} from 'react';
import './../App.css';
import {PostContext} from "../context/PostContext";

const Comments = () => {
    const [posts, setPosts] = useContext(PostContext);
    console.log(posts);

    return (
        posts.map((post, index) => {
            return (
                <div className={"Content1"} key={index}>
                    <p>Имя: {post.name}</p>
                    <p>Емаил: {post.email}</p>
                    <p>{post.message}</p>
                </div>);
        })
    )
        ;

}
export default Comments;
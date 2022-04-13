import React from "react";
import './post.css';

const Post = (props)=> {
    console.log(props.mesage);
    return (

        <div className="text">
            <div>
                <h1>{props.mesage}</h1>
            </div>
        </div>
    );
}

export default Post;
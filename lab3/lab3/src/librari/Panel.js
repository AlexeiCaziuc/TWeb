import React, {Component, useContext, useState} from 'react';
import './../App.css';
import {PostContext} from "../context/PostContext";

const Panel = ()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [posts, setPosts] = useContext(PostContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setPosts([...posts, {name:name, email:email, message:message}]);
        console.log(posts);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className={"a1"}>
            <form onSubmit={handleSubmit}>
                <input type={"text"}
                       className={"input1"}
                       name={"Name"}
                       value={name}
                       required={true}
                       onChange={(e) => setName(e.target.value)}/>
                <input type={"email"}
                       className={"input1"}
                       name={"Email"}
                       value={email}
                       required={true}
                       onChange={(e) => setEmail(e.target.value)}/>
                <p>Comment</p>
                <input type={"text"}
                       className={"input1"}
                       name={"Message"}
                       value={message}
                       required={true}
                       onChange={(e) => setMessage(e.target.value)}/>
                <input type={"submit"} value={"submit"} />
            </form>
        </div>
    );
}
export default Panel;
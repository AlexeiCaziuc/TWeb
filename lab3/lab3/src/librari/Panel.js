import React from 'react';
import './../App.css';
const Panel = ()=> {
    return (
        <div className={"a1"}>
            <form>
                <input type={"text"} className={"input1"} name={"Name"}/>
                <input type={"email"} className={"input1"} name={"Email"}/>
                <p>Coment</p>
                <textarea></textarea>
                <input type={"button"} value={"BUTTON"} />
            </form>
        </div>
    );
}
export default Panel;
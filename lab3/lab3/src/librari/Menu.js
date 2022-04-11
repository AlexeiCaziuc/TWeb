import React from 'react';
import './../App.css';
import {NavLink} from "react-router-dom";
const menu = () =>{
    return(
        <div className={"Menu"}>
            <div className={"href"}>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className={"href"}>
                <NavLink to='/About Us'>About Us</NavLink>
            </div>
            <div className={"href"}>
                <NavLink to='/Comments'>Comments</NavLink>
            </div>
            <div className={"href"}>
                <NavLink to='/Contact'>Contact</NavLink>
            </div>
            <div className={"href"}>
                <NavLink to='/Add home'>Add home</NavLink>
            </div>

        </div>
    );
}
export default menu;
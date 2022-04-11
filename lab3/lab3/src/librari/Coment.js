import React from 'react';
import './../App.css';

const Coment = (props) =>{
    return(
        <div className={"Content1"}>
            <p>Имя: {props.name}</p>
            <p>Емаил: {props.email}</p>
            <p>{props.message}</p>
        </div>
    );

}
export default Coment;
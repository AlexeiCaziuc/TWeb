import React,{Component} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <App tab="Home"/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// <Coment name='Alexei' email='a.kaziuc@mail.ru' message='Privet eto ia sdelal etu huetu'/>
//     <Coment name='Andrei' email='andrei.z@mail.ru' message='Pozdravliaiu'/>
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

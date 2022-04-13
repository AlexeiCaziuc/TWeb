import React from "react";
import './App.css';
import Panel from "./librari/Panel";
import Menu from './librari/Menu'
import {BrowserRouter, Route} from "react-router-dom"
import Content from "./librari/Content";
import Comments from "./librari/Comments";
import {PostProvider} from "./context/PostContext";

const App = ()=> {
  return (
      <PostProvider>
          <BrowserRouter>
              <div className={'app-wraper'}>
                  <div id="root"></div>
                  <div className="App">
                      <div>
                          <header>
                              <img src={"https://pbs.twimg.com/profile_banners/837257302314987520/1488453652/1500x500"} alt={"cartinka"}/>
                          </header>
                      </div>
                  </div>
                  <div>
                      <Panel/>
                      <Menu/>
                      <div className={'app-wraper-content'}>
                          <Route exact path='/' component={Content}/>
                          <Route path='/Comments' component={Comments}/>
                          <Route path='/Home' component={Content}/>
                      </div>
                  </div>
              </div>
          </BrowserRouter>
      </PostProvider>
  );
}
export default App;
//
//
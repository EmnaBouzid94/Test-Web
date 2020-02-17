import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Profil from './Comps/Profil'
import Posts from './Comps/Posts';
import Post from './Comps/Post';
import Profils from './Comps/Profils';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/users" component={Profils}/>
        <Route exact path="/users/:id" component={Profil}/>
        <Route exact path="/users/:id/posts" component={Posts}/>
        <Route exact path="/users/:userId/posts/:postId" component={Post}/>
       

      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Backround from './Backround'
import Guest from './guest';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import { Redirect } from 'react-router';
import {browserHistory} from 'react-router';




function App() {
  return (
    <div className="App">
      <div>
      
       <Backround  name= "property name " > 
       
   </Backround>
  <Guest  />

  

   
     </div>
    </div>
  );
}

export default App;

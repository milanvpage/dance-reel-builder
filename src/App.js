import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
Link,
Route
} from 'react-router-dom';
import React from 'react';
import NavBar from './presentational/NavBar';

export default class App extends React.Component {
  
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <h1>Dance Reel Builder</h1>
        </div>
      </Router>
    )
  }
}


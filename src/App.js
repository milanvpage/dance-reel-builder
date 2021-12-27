import './App.css';
// import React from 'react';

import React, { Component } from 'react'
import Pages from './components/pages/Pages';
import { NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to ="/">Home</NavLink><br/>
        <NavLink to="/commercial">Commercial</NavLink>
        <NavLink to="/theater">Theater</NavLink>
        <br/>
        <Pages />
      </div>
    )
  }
}


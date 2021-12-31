import './App.css';
// import React from 'react';

import React, { Component } from 'react'
import Pages from './components/pages/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


export default class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <Pages />
    </div>
    )
  }
}


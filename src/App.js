import './App.css';
// import React from 'react';

import React, { Component } from 'react'
import Pages from './components/pages/Pages';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Pages />
      </div>
    )
  }
}


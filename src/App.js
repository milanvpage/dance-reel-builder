import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
Link,
Route
} from 'react-router-dom';
import React from 'react';
import NavBar from './presentational/NavBar';
import Categories from './Categories';

export default class App extends React.Component {
  // set state that determines what category we're on
  // we have 3 categories so for now we're goign to set it uo like a string for what category we're on
  state = {
    category: "commercial", //defualt commercial for now
    commercial: [],
    concert: [],
    theater: []
  }

  // need setState() if we're using state, otherwise there's no point in having state
  // create function to change state
  changeCategory = (category) => {
    this.setState({
      category: category

      // we would be calling this function in the Navbar componenet in the onClicks - so we need to pass it through as a PROP to NavBar then insid emy onClick callback function
    })
  }

// componentDidUpdate(){ // log my state after it updates to see how it changes
  //   console.log(this.state)
  // }

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar changeCategory={this.changeCategory}/>
          <h1>Dance Reel Builder</h1>
          <Categories category={this.state.category}/>
          {/* need to make sure our Categroies knows about our state so it can determine which page to render - so we pass it through as a PROP (named category) */}
          {/* Inisde my Catrgories Component is where I'm goign to look at this PROP that I passed through of "category" and determine which Component to render*/}
        </div>
      </Router>
    )
  }
}


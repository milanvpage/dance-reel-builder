import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// we can use <Link> because NavBar is a child of Router inside our App.js where we called it
// call Navbar in App.js so we can use it
export default function NavBar({changeCategory}) { //passing through my changeCategory callback function that I passed through as a Prop to my NavBar inside my App.js
    function isSelected(isActive){
        return isActive => isActive ? "selected" : ""
                // need explicit return because it's not an arrow function - if it was an arrow function with multiple lines wewould also need the "return" keyword
                // Here it’s going to take in an argument of isActive and then we’re looking at whether that’s true or false - IF true I want to give that NavLink a class of “selected” otherwise I just leave it blank 
    }

    return (
        <div>
            {/* NavLink: A special version of <Link> that will add styling attributes to the rendered element when it matches the current URL  */}
            {/* what we can do is look at this property in our className (of NavLink) of isActive, and if it’s on that link this property will be true (isActive class will be true) if it’s not on that link it will be false*/}
            {/* WHAT we can do is add in this className PROP to my NavLinks and look at whether it’s active or not and if it is I want to display it in a different way */}
            {/* BEFORE the isActive class function: */}
            {/* <NavLink to="/starships" className={isActive => isActive ? "selected" : ""} >StarShips</NavLink> */}

            <NavLink to="/commercial"
            className={isSelected}
            >Commercial </NavLink>
            <NavLink to="/concert"
            className={isSelected}
            >Concert </NavLink>
            <NavLink to="/theater"
            className={isSelected}
            >Theater </NavLink>

            {/* set up state first in App.js becasue App.js will have access to my Navbar and my Categories  - IF WE SET STATE in my Navbar we wouldn't be able to get it to my Categories.js to determine which one it's rendering - AND if i set my state in Categories.js, how would NavBar change it*/}
            {/* all buttons need an onclick callback function */}
            {/* buttons should go here */}
        </div>
    )
}


import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// we can use <Link> because NavBar is a child of Router inside our App.js where we called it
// call Navbar in App.js so we can use it
export default function NavBar({changeCategory}) { //passing through my changeCategory callback function that I passed through as a Prop to my NavBar inside my App.js

    return (
        <div>
            
            {/* set up state first in App.js becasue App.js will have access to my Navbar and my Categories  - IF WE SET STATE in my Navbar we wouldn't be able to get it to my Categories.js to determine which one it's rendering - AND if i set my state in Categories.js, how would NavBar change it*/}
            {/* all buttons need an onclick callback function */}
            {/* buttons should go here */}
        </div>
    )
}


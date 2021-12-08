import React from 'react'


export default function Categories({category}) {
    //Once we have those Components set up - We can then Create another function in my Pages.js that we can use to determine which page I’m rendering
    
    
    
    return (
        <div>
            <NavLink to="/commercial"
            className={isSelected}
            >StarShips</NavLink>
            <NavLink to="/concert"
            className={isSelected}
            >Planets</NavLink>
            <NavLink to="/theater"
            className={isSelected}
            >People</NavLink>
        </div>
    )
}

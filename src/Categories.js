import React from 'react'
import CommercialContainer from './commercial/CommercialContainer'
import ConcertContainer from './concert/ConcertContainer'
import TheaterContainer from './theater/TheaterContainer'
import {
    Switch,
    Route
} from 'react-router-dom'

export default function Categories({category, commercial, concert, theater}) {
    //Once we have those Components set up - We can then Create another function in my Pages.js that we can use to determine which page I’m rendering
    
    
    
    return (
        <div>
            <Route 
            exact path="/commercial" 
            render= {routerProps => <CommercialContainer commercial={commercial} routerInfo={routerProps}/>}/>
            <Route 
            exact path="/concert" 
            render= {routerProps => <CommercialContainer commercial={concert} routerInfo={routerProps}/>}/>
            <Route 
            exact path="/theater" 
            render= {routerProps => <CommercialContainer commercial={theater} routerInfo={routerProps}/>}/>
        </div>
    )
}

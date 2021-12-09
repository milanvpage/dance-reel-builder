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
            //// routerProps doesn't have to be wrapped in () becasue it's only one argument, we would use the () if we had two arguments
            render= {routerProps => <CommercialContainer commercial={commercial} routerInfo={routerProps}/>}/>
            <Route 
            exact path="/concert" 
            render= {routerProps => <ConcertContainer concert={concert} routerInfo={routerProps}/>}/>
            <Route 
            exact path="/theater" 
            render= {routerProps => <TheaterContainer concert={theater} routerInfo={routerProps}/>}/>
        </div>
    )
}

import React from 'react'
import { Switch, Route } from 'react-router'
import CommercialContainer from '../commercial/CommercialContainer'
import ConcertContainer from '../concert/ConcertContainer'
import Home from '../Home'
import TheaterContainer from '../theater/TheaterContainer'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route  path="/commercial" component={routerProps => <CommercialContainer routerProps={routerProps} />}></Route>
                <Route  path="/theater" component={routerProps => <TheaterContainer routerProps={routerProps} />}></Route>
                <Route  path="/concert" component={routerProps => <ConcertContainer routerProps={routerProps} />}></Route>
                <Route  path="/" component={routerProps => <Home routerProps={routerProps} />}></Route>

            {/* build out another route that has a dynmaic route aspect to it so I can edit a specific commercial */}
            </Switch>
        </div>
    )
}

// what SWITCH does when we wrap all our routes in it - it will just use the first route that matches - where as if we don't use Switch and just declare tons of routes, they will all run through those checks and have multiple rendeirng at once
// 
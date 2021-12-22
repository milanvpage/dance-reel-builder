import React from 'react'
import { Switch, Route } from 'react-router'
import CommercialContainer from '../commercial/CommercialContainer'
import TheaterContainer from '../theater/TheaterContainer'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route path="/commercial" component={routerProps => <CommercialContainer routerProps={routerProps} />}></Route>
                <Route path="/theater" component={routerProps => <TheaterContainer routerProps={routerProps} />}></Route>
            </Switch>
        </div>
    )
}

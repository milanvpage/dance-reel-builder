import React from 'react'
import { Switch, Route } from 'react-router'
import CommercialContainer from '../commercial/CommercialContainer'

export default function Pages() {
    return (
        <div>
            <Switch>
                <Route path="/commercial" component={routerProps => <CommercialContainer routerProps={routerProps} />}></Route>
            </Switch>
        </div>
    )
}

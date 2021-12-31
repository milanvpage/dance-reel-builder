import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setConcert } from './../../redux/ConcertAction'
import ConcertCard from './ConcertCard'
import ConcertForm from './ConcertForm'
import { Link, Route } from 'react-router-dom'


class ConcertContainer extends Component {
    
    componentDidMount(){
        // where we fetch our data
    this.props.dispatchSetConcert()
    // the function I created inside my mapDipatchToProps
    // I'm calling it here to mount it onto my page
    }
    
    
    render() {
        return (
            <div>
                <h1>All Concert Dance</h1>
                <Link to="/concert/new">Add a project</Link>
                <Route exact path="/concert/new"component={ routerprops => <ConcertForm />} />

                <div>
                    <ul>
                    {this.props.concert.map(concert => <ConcertCard key={concert.id} {...concert}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return{
        concert: stateFromStore.concert
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatchSetConcert: () => dispatch(setConcert())
    } // we're importing a function from our ConcertAction and callingit inside dispatch
    // we have thunk so that's why we cna pass dipatch a function 
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertContainer)

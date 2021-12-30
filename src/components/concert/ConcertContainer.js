import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setConcert } from './../../redux/ConcertAction'
import ConcertForm from './ConcertForm'


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
                <ConcertForm />
                <div>
                    <ul>
                    {this.props.concert.map(concert => <li key={concert.id}>{concert.name}</li>)}
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

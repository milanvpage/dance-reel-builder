import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheater } from '../../redux/TheaterAction'

class Theater extends Component {
    
    
    
    render() {
        return (
            <div>
                <h1>All Theater Dance</h1>
                <div>
                    {this.props.theater.map(theater => <p key={theater.id}>{theater.name}</p>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return {
        theater: stateFromStore.theater
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheaterContainer)

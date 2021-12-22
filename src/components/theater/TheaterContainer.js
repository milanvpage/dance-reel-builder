import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheater } from '../../redux/TheaterAction'

class Theater extends Component {
    
    
    
    render() {
        return (
            <div>
                
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

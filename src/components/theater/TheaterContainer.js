import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheater } from '../../redux/TheaterAction'

class TheaterContainer extends Component {
    
    componentDidMount(){
        this.props.dispatchSetTheater()
    }
    
    render() {
        return (
            <div>
                <h1>All Theater Dance</h1>
                <div>
                    <ul>
                    {this.props.theater.map(theater => <li key={theater.id}>{theater.name}</li>)}
                    </ul>
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

function mapDispatchToProps(dispatch) {
    return{
        dispatchSetTheater: () => dispatch(setTheater())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheaterContainer)

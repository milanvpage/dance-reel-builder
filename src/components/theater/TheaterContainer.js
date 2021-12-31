import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheater } from '../../redux/TheaterAction'
import TheaterCard from './TheaterCard'
import TheaterForm from './TheaterForm'
import { Link, Route } from 'react-router-dom'

class TheaterContainer extends Component {
    
    componentDidMount(){
        this.props.dispatchSetTheater()
    }
    
    render() {
        return (
            <div>
                <h1>All Theater Dance</h1>
                <Link to="/theater/new">Add a project</Link>
                <Route exact path="/theater/new" component={routerProps => <TheaterForm />} />
                <div>
                    <ul>
                    {this.props.theater.map(theater => <TheaterCard key={theater.id} {...theater}/>)}
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

import React, { Component } from 'react'

export default class ConcertContainer extends Component {
    
    componentDidMount(){
        // where we fetch our data
        this.props.dispatchSetCommercial()
    }
    
    render() {
        return (
            <div>
                <h1>All Concert Dance</h1>
                <div>
                    {/* map out concert dance here */}
                </div>
            </div>
        )
    }
}

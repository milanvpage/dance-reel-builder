import React, { Component } from 'react'

class ConcertContainer extends Component {
    
    
    
    render() {
        return (
            <div>
                <h1>All Concert Dance</h1>
                <div>
                    <h1>Test</h1>
                    {/* map out concert dance here */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return{
        theater: stateFromStore.theater
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertContainer)

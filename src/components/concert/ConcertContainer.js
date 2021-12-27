import React, { Component } from 'react'

class ConcertContainer extends Component {
    
    
    
    render() {
        return (
            <div>
                <h1>All Concert Dance</h1>
                <div>
                    {this.props.concert.map(concert => <p key={concert.id}>{concert.name}</p>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConcertContainer)

import React from 'react'
import { connect } from 'react-redux'
import { setCommercial } from './../../redux/CommercialAction'

class CommercialContainer extends React.Component {
    
componentDidMount(){
    // where we fetch our data
    this.props.dispatchSetCommercial()
}

render(){
    return (
        <div>
            <h1>All Commercial Dance</h1>
            <div>
                {this.props.commercial.map(commercial => <p key={commercial.id}>{commercial.name}</p>)}
            </div>
        </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return {
        commercial: stateFromStore.commercial
    }
}

function mapDispatchToProps(dispatch){
    return{
        dispatchSetCommercial: () => dispatch(setCommercial())
    } // we're importing a function from our CommercialAction and callingit inside dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(CommercialContainer)



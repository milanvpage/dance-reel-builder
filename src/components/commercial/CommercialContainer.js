import React from 'react'
import { connect } from 'react-redux'
import { setCommercial } from './../../redux/CommercialAction'
import CommercialForm from './CommercialForm'

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
                <CommercialForm />
                <ul>
                {this.props.commercial.map(commercial => <li key={commercial.id}>{commercial.name}</li>)}
                </ul>
            </div>
        </div>
        )
    }
}

function mapStateToProps(stateFromStore){
    return {
        commercial: stateFromStore.commercial // return object that will be merged with our props
    } // can map all of our state here but we don't need to
}

function mapDispatchToProps(dispatch){ // whole point to mapDispatchToProps is to get access to this dipatch function - that's why we need to pass it inn as an arg - wnat to return an object that's goignto be merged with our props - 
    return{
        dispatchSetCommercial: () => dispatch(setCommercial()) // return value of setCommercialmis our action object - so we're still passing dispatch this object we're just calling it through a function to get access to it 
    } // we're importing a function from our CommercialAction and callingit inside dispatch
} // dispatchSetCommercial is our key and then our value is the function we're calling 

export default connect(mapStateToProps, mapDispatchToProps)(CommercialContainer)

// connect is a function that we're going to call and then it's goign to return another function and then that function expects our component as its arg
// we're calling what connect returns with the arg of our CommercialContianer
// 
import React from 'react'
import { connect } from 'react-redux'
import { setCommercial } from './../../redux/CommercialAction'
import CommercialCard from './CommercialCard'
import CommercialForm from './CommercialForm'
import { Switch, Route } from 'react-router-dom'
import EditCommercialForm from './EditCommercialForm'

class CommercialContainer extends React.Component {
    
componentDidMount(){
    // where we fetch our data
    this.props.dispatchSetCommercial()
}

render(){
    return (
        <div>
            <h1>All Commercial Dance</h1>
            {/* if its an edit i want to render the edit form if its a new commercial I want to render the commercial form at the route commercial/new */}
            <Switch>
            <Route exact path="/commercial/:id/edit"component={routerProps => <EditCommercialForm routerProps={routerProps} />} />
            <Route exact path="/commercial/new"component={routerProps => <CommercialForm />} />
            </Switch>
            <div>
                <ul>
                {this.props.commercial.map(commercial => <CommercialCard key={commercial.id} {...commercial}/>)}
                {/* pass through my key as a prop for my id - and spreading out all my props for my commercial and sneding it through to my CommercialCard */}
        {/* instead of doing person={person} - THIS way i don'thave to callit inside my CommercialCard props.person.name etc.. now I can just call and get those attributes directly */}
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
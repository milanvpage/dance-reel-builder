// need controlled components with my input fields

import React, { Component } from 'react'
import { addCommercial } from '../../redux/CommercialAction'
import { connect } from 'react-redux'

class CommercialForm extends Component {
    // set up state so page doens't reload, and so my form is controlled - local state
    // set up input field to be controlled with my state
    state = {
        name: ""
    }
    
    handleChange = (e) => {
        // this.setState({[e.target.name]: e.target.value} // for if we have more than one input field // then manually set all our input fields to have a name so that we have one handleChange
        this.setState({name: e.target.value})
    } // calling an arrow function so we have the context of this from where we've defined it rather than where we're calling it(the scope from this function to pass "this" from this scope)

    handleSubmit = (e) => {
        e.preventDefault() // bcause I want to handle my http request with fetch, I don't want them handled bby html SO I'm preventing html from trying to send a GET request
        // this is where we want to tie in our action, so we want to:
        // dispatch addCommercial
        // and clear out my state
        this.props.dispatchAddCommercial(this.state) // calling the function I'm passing through as a prop in my mapDispatchToProps function - so my handleSUbmit can call that function everytime you hit sumbit button
        // pass in my state because it represents my whole commercial 
        // If we have somehting else in state that has nothing to do with my commercial then we'd have to do more thinking - but for right now all we have is a name
        this.setState({name: ""}) // this will clear our name in the inout field so when I hit submit the input clears
    }
    // always need to prevent default with handleSubit
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="commercial-name-input">Name:</label>
                {/* for label we often want to give it a for element - react uses htmlFor prop which will translate to that for property and label */}
                {/* SO what we're goignto do is add an id to my input field and make it unique so nothing else in my page has it */}
                {/* HTML when we click on the name on our page it highlights the input field - f I don't have the htmlFor and nthe id number we lose that functionality on our page   */}
                <input id="commercial-name-input" onChange={this.handleChange} value={this.state.name} type="text" /> 
                {/* here my event handleer is going to call handleChange everytime there's an onclick and pass in the value of the function here, so it will no longer be associated to "this" by the time it's called, unless we mkae it an arrow function - which it will then take it's context from where it's defined */}
                {/* what we're doing here is - whenever we define an event listener and we're passing something in it's going to take the return vslue of "this.handleChange" which is our function and then it will save that return value to call anytime it's changed */}
                {/* WHen this input fiel dis added to the DOM and they  add that event listner it evaluates the onChange and it looks at this.handleSubmit a function "this.handleSubmit #=> f(){} - and then this is what it has, this function "f(){}" to be able to call everytime there is a change - it no longer looks at this.handleSubmit, becasue we're not calling  this.handleSubmit() like this everytime that it's changed, it's calling this function f(){}, it's no longer tied to  */}
                <input type="submit" />
            </form>
        )
    }
}
function mapDispatchToProps(dispatch) {
// always want to retrun an object that will be merged with our PROPS - SO we can access them in our Component
    return {
        dispatchAddCommercial: (commercial) => dispatch(addCommercial(commercial)) // this is where we're passing in our addCommercial function to diaptch - this function addCommercial is goign ot return my function - THIS function when we call it is goignto return a function ( the function we are using our fetch request in) AND then thunk is goign to call this function and pass in dispatch (we pass dispatch into ourfunction when we created our fetch request - look at our commercialAction.js)
        // and in this fetch request we're kinda delaying our dispatch until we get our response back from our backend 
        // need an arg of commercial becasue that's the object that we're passing into our function to be sent to the backend
    }
}

export default connect(null, mapDispatchToProps)(CommercialForm)
// need connect so we can have access to the dispatch function
// we use null here because we're not using mapStateToProps which is the first arg connect takes in, so we needed to get access to the second arg mpaDispatchToProps so we can have access to my dispatch function
// that's what we're pulling in here is access to dispatch and "null" (mapStateToProps) gives us acces to state
//  REMEMBER first arg of connect gives me access to state, second argument of connect gives me access to dispatch - AND BOTH of them will return an object thatwill be merged with my PROPS
// 
// need mapDispatchProps
// call connect which will return us a function which will take in my Component
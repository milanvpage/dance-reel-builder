import React, { Component } from 'react'
import { addTheater } from '../../redux/TheaterAction'
import { connect } from 'react-redux'

class TheaterForm extends Component {
    
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
        this.props.dispatchAddTheater(this.state) // calling the function I'm passing through as a prop in my mapDispatchToProps function - so my handleSUbmit can call that function everytime you hit sumbit button
        // pass in my state because it represents my whole commercial 
        // If we have somehting else in state that has nothing to do with my commercial then we'd have to do more thinking - but for right now all we have is a name
        this.setState({name: ""}) // this will clear our name in the inout field so when I hit submit the input clears
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="theater-name-input">Name:</label>
                
                <input id="theater-name-input" onChange={this.handleChange} value={this.state.name} type="text" /> 
                
                <input type="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddTheater: theater => dispatch(addTheater(theater))
    }
}

export default connect(null, mapDispatchToProps)(TheaterForm)

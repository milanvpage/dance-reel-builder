import React, { Component } from 'react'

export default class ConcertForm extends Component {
    
    state = {
        name: ""
    }

    handleChange = (e) => {
        // this.setState({[e.target.name]: e.target.value} // for if we have more than one input field // then manually set all our input fields to have a name so that we have one handleChange
        this.setState({name: e.target.value})
    } // calling an arrow function so we have the context of this from where we've defined it rather than where we're calling it(the scope from this function to pass "this" from this scope)
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="concert-name-input">Name:</label>
                
                <input id="concert-name-input" onChange={this.handleChange} value={this.state.name} type="text" /> 
                
                <input type="submit" />
            </form>
        )
    }
}

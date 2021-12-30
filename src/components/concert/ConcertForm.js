import React, { Component } from 'react'

export default class ConcertForm extends Component {
    
    state = {
        name: ""
    }
    
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

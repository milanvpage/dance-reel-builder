import React, { Component } from 'react'

export default class TheaterForm extends Component {
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

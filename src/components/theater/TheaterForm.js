import React, { Component } from 'react'
import { addTheater } from '../../redux/TheaterAction'
import { connect } from 'react-redux'

class TheaterForm extends Component {
    
    state = {
        name: "",
        url: ""
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) // for if we have more than one input field // then manually set all our input fields to have a name so that we have one handleChange
        // this.setState({name: e.target.value})
    } 
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchAddTheater(this.state) 
        this.setState({
            name: "",
            url: ""
        }) 
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="theater-name-input">Name:</label>
                <input className="name" name="name" id="theater-name-input" onChange={this.handleChange} value={this.state.name} type="text" /> 
                <br/>
                <br/>
                <label htmlFor="theater-url-input">URL:</label>
                <input name="url" id="theater-url-input" onChange={this.handleChange} value={this.state.url} type="text" /> 
                <br/>
                <br/>
               <input type="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddTheater: (theater) => dispatch(addTheater(theater))
    }
}

export default connect(null, mapDispatchToProps)(TheaterForm)

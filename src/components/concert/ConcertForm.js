import React, { Component } from 'react'
import { addConcert } from '../../redux/ConcertAction'
import { connect } from 'react-redux'

class ConcertForm extends Component {
    
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
        this.props.dispatchAddConcert(this.state) 
        this.setState({
            name: "",
            url: ""
    }) 
    }
    
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="concert-name-input">Name:</label>
                <input className="name" name="name" id="concert-name-input" onChange={this.handleChange} value={this.state.name} type="text" /> 
                <br/>
                <br/>
                <label htmlFor="concert-url-input">URL:</label>
                <input name="url" id="concert-url-input" onChange={this.handleChange} value={this.state.url} type="text" /> 
                <br/>
                <br/>
                <input type="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddConcert: (concert) => dispatch(addConcert(concert))
    }
}

export default connect(null, mapDispatchToProps)(ConcertForm)

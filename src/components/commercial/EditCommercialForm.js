import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditCommercialForm extends Component {
    
    constructor(props){
        super(props)
        
        let commercial = props.commercial.find(c => {
                    return c.id === parseInt(props.routerProps.match.params.id) // need to parseInt this becasue what's coming from my URL (from my match from my router params remeber it was a string) whereas my id from in here should be an integer
                    // want to look at my routerProps so I can get to match and grab that params that shows us what id we have, that way I can compare the id to the id that matches my array I get from my store of my state of commercials
                })
            // I wnat to find the person in this array that matches the id from my Router 
            // how I would determine my initial state would be based on what's in my store and coming from my PROPS
            this.state = {
                name: commercial ? commercial.name : ""
            }
    }

    // componentDidMount(){
    //     let commercial = props.commercial.find(c => {
    //         return c.id === parseInt(props.routerProps.match.params.id) // need to parseInt this becasue what's coming from my URL (from my match from my router params remeber it was a string) whereas my id from in here should be an integer
    //         // want to look at my routerProps so I can get to match and grab that params that shows us what id we have, that way I can compare the id to the id that matches my array I get from my store of my state of commercials
    //     })
    //     this.setState({

    //     })
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <form>
                <input value={this.state.name} onChange={this.handleChange} name="name" type="text"/>
                <input type="submit"/>
            {/* from here what I would like to do is look at my routerProps */}
            {/* when I look at my router props I can determine from match and see which id we're talking about when I go to the EditFormRoute */}
            {/* need to connect to my store because I need access to all of the commercials in my store */}
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        commercial: state.commercial
    }
}

export default connect(mapStateToProps)(EditCommercialForm)
// need to use mapStateToProps and pull out commercials
// I want to look at the store state that has all my commercials and determine based on the id that's in my route which commercial I'm talking about inorder to populate this form

// need to bring in dispatch here
// hook up editCommercial Action
// Then I would want to do is onSubmit dispatch that action and pull out our state here that we're changing instead of like right now I'm pulling out is I'm hardcoding in the orginal name with an extra !
// instead of this         props.editCommercial({name: props.name + "!", id: props.id}) here (in my COmmercialCard - in my EditCommercialForm Id be pulling it out of my state - FROM what we're managing with our input field
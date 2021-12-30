import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditCommercialForm extends Component {
    // set up intial state
    state = {

    }

    render() {
        console.log(this.props)
        return (
            <form>
                <input type="text"/>
                <input type="submit"/>
            {/* from here what I would like to do is look at my routerProps */}
            {/* when I look at my router props I can determine from match and see which id we're talking about when I go to the EditFormRoute */}
            {/* need to connect to my store because I need access to all of the commercials in my store */}
            </form>
        )
    }
}

export default connect(state => ({commercial: state.commercial}))(EditCommercialForm)
// need to use mapStateToProps and pull out commercials
// I want to look at the store state that has all my commercials and determine based on the id that's in my route which commercial I'm talking about inorder to populate this form
import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditCommercialForm extends Component {
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

export default connect()(EditCommercialForm)

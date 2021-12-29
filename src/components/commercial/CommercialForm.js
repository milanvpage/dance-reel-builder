// need controlled components with my input fields

import React, { Component } from 'react'

export default class CommercialForm extends Component {
    render() {
        return (
            <form>
                <label htmlFor="commercial-name-input">Name:</label>
                {/* for label we often want to give it a for element - react uses htmlFor prop which will translate to that for property and label */}
                {/* SO what we're goignto do is add an id to my input field and make it unique so nothing else in my page has it */}
                {/* HTML when we click on the name on our page it highlights the input field - f I don't have the htmlFor and nthe id number we lose that functionality on our page   */}
                <input id="commercial-name-input" type="text" />
                <input type="submit" />
            </form>
        )
    }
}

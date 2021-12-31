import React from 'react'
import { deleteTheater } from '../../redux/TheaterAction'
import { connect } from 'react-redux'

function TheaterCard(props) {

    function handleDelete(){
        props.dispatchDeleteTheater(props.id)
    }
    
    return (
        <div className= "card">
            <li>{props.name} - {props.url}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteTheater: (id) => dispatch(deleteTheater(id))
    }
}

export default connect(null, mapDispatchToProps)(TheaterCard)

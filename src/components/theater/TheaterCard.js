import React from 'react'
import { deleteTheater } from '../../redux/TheaterAction'
import { connect } from 'react-redux'

function TheaterCard(props) {

    function handleDelete(){
        props.dispatchDeleteTheater(props.id)
    }
    
    return (
        <div>
            <li>{props.name}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDeleteTheater: (id) => dispatch(deleteTheater(id))
    }
}

export default connect(null, mapDispatchToProps)(TheaterCard)

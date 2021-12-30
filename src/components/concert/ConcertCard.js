import React from 'react'
import { deleteConcert } from '../../redux/ConcertAction'
import { connect } from 'react-redux'


function ConcertCard(props) {

    function handleDelete(){
        props.dispatchDeleteConcert(props.id)
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
        dispatchDeleteConcert: (id) => dispatch(deleteConcert(id))
    }
}

export default connect(null, mapDispatchToProps)(ConcertCard)

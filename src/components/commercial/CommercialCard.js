import React from 'react'
import { deleteCommercial } from '../../redux/CommercialAction'
import { connect } from 'react-redux' // need access to connect in order to dispatch

function CommercialCard({name}) {

    function handleDelete(){

    }
    return (
        <div>
            <li>{name}</li><button onClick={handleDelete}>X</button>
        </div>
    )
}

export default connect(null, {})(CommercialCard)

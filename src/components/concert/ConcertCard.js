import React from 'react'
import { deleteConcert } from '../../redux/ConcertAction'
import { connect } from 'react-redux'

export default function ConcertCard() {
    
    return (
        <div>
            <li>{props.name}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

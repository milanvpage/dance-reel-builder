import React from 'react'
import { deleteTheater } from '../../redux/TheaterAction'
import { connect } from 'react-redux'

export default function TheaterCard() {
    
    
    return (
        <div>
            <li>{props.name}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

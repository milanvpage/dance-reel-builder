import React from 'react'

export default function ConcertCard() {
    

    
    return (
        <div>
            <li>{props.name}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

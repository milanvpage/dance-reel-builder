import React from 'react'

export default function ConcertContainer(props) {
    
    function handleClick(){
        console.log("click")
        props.routerInfo.history.goBack()
    }
    
    return (
        <div>
            <button onClick={handleClick}>Back</button>
            <h1>Concert Choreography</h1>
            {/* map through data here once we have our backend and FETCH request set up */}

        </div>
    )
}

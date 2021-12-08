import React from 'react'

export default function CommercialContainer() {
    function handleClick(){
        console.log("click")
        props.routerInfo.history.goBack()
    }
    
    return (
        <div>
            <button onClick={handleCLick}>Back</button>

            <h1>Commercial Choreography</h1>
            {/* map through data here once we have our backend and FETCH request set up */}

        </div>
    )
}

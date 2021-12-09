import React from 'react'

export default function TheaterContainer(props) {
    
    function handleClick(){
        console.log("click")
        props.routerInfo.history.goBack()
    }

    // function handleSubmit(){
    //     // FETCh
    //     //re-route
    //     props.routerInfo.history.push("/") // re-route to home route
    // }
    
    return (
        <div>
            {/* <button onCLick={handleSubmit}>Submit</button> */}

            <button onClick={handleClick}>Back</button>
            <h1>Theater Choreography</h1>
            {/* map through data here once we have our backend and FETCH request set up */}
        </div>
    )
}

// SUBMIT re-route Button:
// function handleSubmit(){
//     // FETCh
//     //re-route
//     props.routerInfo.history.push("/") // re-routeing to home page in this Example
// }

//  <button onCLick={handleSubmit}>Submit</button>

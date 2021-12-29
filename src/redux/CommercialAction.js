
// BEST PRATICE with the SET_COMMERCIAL variable
//  export const setCommercial = (commercial) => ({type: SET_COMMERCIAL, payload: commercial})

export const setCommercial = () => {
    
    return (dispatch) => { // returing function that takes dispatch in as an arg // now we can call dipatch here becasue I have access to the dispatch fucntion
        //fetch goes here
        // thunk gives me access to dispatch within my action creators
        fetch("http://localhost:3000/commercials")
        .then(r => r.json())
        .then(commercials => dispatch({type: "SET_COMMERCIAL", payload: commercials}))
    } // now I can pass dispatch my action object
    // and my payload is what I c=got from my fetch request
    // {type: "SET_COMMERCIAL", payload: commercial}
}


// (commercial) is our array directly coming from our backend

// edit commercial
 // delete commercial
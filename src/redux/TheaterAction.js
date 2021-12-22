// BEST PRATICE with the SET_COMMERCIAL variable
//  export const setCommercial = (commercial) => ({type: SET_COMMERCIAL, payload: commercial})

export const setCommercial = () => {
    
    return (dispatch) => {
        //fetch goes here
        fetch("http://localhost:3000/theaters")
        .then(r => r.json())
        .then(theater => dispatch({type: "SET_THEATER", payload: theater}))
    }
    // {type: "SET_COMMERCIAL", payload: commercial}
}


// (commercial) is our array directly coming from our backend

// add commercial
// edit commercial
 // delete commercial
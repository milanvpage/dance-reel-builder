
// BEST PRATICE with the SET_COMMERCIAL variable
//  export const setCommercial = (commercial) => ({type: SET_COMMERCIAL, payload: commercial})

export const setCommercial = () => {
    
    return (dispatch) => {
        //fetch goes here
        fetch("http://localhost:3000/commercials")
        .then(r => r.json())
        .then(commercials => dispatch({type: "SET_COMMERCIAL", payload: commercials}))
    }
    // {type: "SET_COMMERCIAL", payload: commercial}
}


// (commercial) is our array directly coming from our backend

// add commercial
// edit commercial
 // delete commercial
// BEST PRATICE with th SET_CONCERT variable
//  export const setConcert = (concert) => ({type SET_CONCERT, payload: concert})

export const setConcert = () => {
    
    return (dispatch) => {
        //fetch goes here
        fetch("http://localhost:3000/concerts")
        .then(r => r.json())
        .then(concerts => dispatch({type: "SET_CONCERT", payload: concerts}))
    }
    // {type: SET_CONCERT", payload: concert}
}


// (concert) is our array directly coming from our backend

// add concert
// edit concert
 // delete concert
// BEST PRATICE with the SET_theater variable
//  export const setTheater = (theater) => ({type: SET_theater, payload: theater})

export const setTheater = () => {
    
    return (dispatch) => {
        //fetch goes here
        fetch("http://localhost:3000/theaters")
        .then(r => r.json())
        .then(theater => dispatch({type: "SET_THEATER", payload: theater}))
    }
    // {type: "SET_THEATER", payload: theater}
}


// (theater) is our array directly coming from our backend

// add theater
// edit theater
 // delete theater
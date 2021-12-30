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
export const addTheater = (theater) => { // take in arg so we have datat for our componet - the datat we're grabbing from our form/ submitting
    // need thunk becasue we're doing async logic - sned POST request 

    return (dispatch) => {
        fetch("http://localhost:3000/theaters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" // these tell my backend what kind of response I want back and what kind of response I'm sending - how I'm sending my data (what kind of language), and what kind of data I'm getting back (what kind of languagae I'm getting back)
            },
            body: JSON.stringify(theater)
        })
        .then(r => r.json()) // parse out response // and I know I set up my backend so that it will send that perosn back directly - so then I can use dispatch and add this to my store
        .then(theater => dispatch({type: "ADD_THEATER", payload: theater})) // kinda like what I'm doing in my first fetch request up top
    }
}
// edit theater
 // delete theater
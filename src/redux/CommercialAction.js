
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
// alsways knwo that my action creators are going to be functions
// 
// add commercial
export const addCommercial = (commercial) => { // take in arg so we have datat for our componet - the datat we're grabbing from our form/ submitting
    // need thunk becasue we're doing async logic - sned POST request 

    return (dispatch) => {
        fetch("http://localhost:3000/commercials", {
            method: "POST",
            headers: {
                "Content-Typer": "application/json",
                "Accept": "application/json" // these tell my backend what kind of response I want back and what kind of response I'm sending - how I'm sending my data (what kind of language), and what kind of data I'm getting back (what kind of languagae I'm getting back)
            },
            body: JSON.stringify(commercial)
        })
        .then(r => r.json()) // parse out response // and I know I set up my backend so that it will send that perosn back directly - so then I can use dispatch and add this to my store
        .then(commercial => dispatch({type: "ADD_COMMERCIAL", payload: commercial})) // kinda like what I'm doing in my first fetch request up top
    }
}
// edit commercial
 // delete commercial
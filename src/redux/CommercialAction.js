
// BEST PRATICE with the SET_COMMERCIAL variable
//  export const setCommercial = (commercial) => ({type: SET_COMMERCIAL, payload: commercial})
// import { EDIT_COMMERCIAL, SET_COMMERCIAL, DELETE_COMMERCIAL, ADD_COMMERCIAL } from './ActionCreators'

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
                "Content-Type": "application/json",
                "Accept": "application/json" // these tell my backend what kind of response I want back and what kind of response I'm sending - how I'm sending my data (what kind of language), and what kind of data I'm getting back (what kind of languagae I'm getting back)
            },
            body: JSON.stringify(commercial)
        })
        .then(r => r.json()) // parse out response // and I know I set up my backend so that it will send that perosn back directly - so then I can use dispatch and add this to my store
        .then(commercial => dispatch({type: "ADD_COMMERCIAL", payload: commercial})) // kinda like what I'm doing in my first fetch request up top
    }
}
 // delete commercial
 export const deleteCommercial = (id) => { // need to pass in id and then interpolate my URL so i can have access to that id
     return (dispatch) => {
         fetch(`http://localhost:3000/commercials/${id}`, {
             method: "DELETE" // AND we don't need any body or anything like that becasue we're just sending through the id in the URl

         }) // also need that config object as well here so we cna be able to delete
         .then(r => r.json())// then we can parse out our json response
         // this will sometimes send an error  if we're sneidng through no content and we're not sneding back any json, we can't pass any json out of a repsonse that we're not sending 
         .then(data => dispatch({type: "DELETE_COMMERCIAL", payload: id})) // here I can just delete that perosn by the id that we have up inour URL - I don't even need to pull it from datat because we're not sneidng any data
        // this is whre I'll want ot dispatch nad sned through a payload of id
        }
 } 

 // if your backend isn't sneidngany json data you will prbably see an error if you're tryng to call r.json or that json method on a response object where it doens't have any json response-
 // you'll get this "Uncaught (in promise) SYntaxError: Unexpected end of JSON input at commercialAction.js"
// what we can do is instead of handling the .then(r => r.json()) we can just takes in our response, not parse any json out of it becasue we don't need to and then just  dispatch right away
// BECAUSE we don't need to handle parsing any json response out 

// edit commercial
// little more complicated becasue we're taking data that already exists in my state and changing it around
 export const editCommercial = (commercial) => {
     return (dispatch) => {
        fetch(`http://localhost:3000/commercials/${commercial.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ name: commercial.name})
        })
        .then(r => r.json()) // parse out my response for my JSON
        .then( c => dispatch(({type: "EDIT_COMMERCIAL", payload: c}))) // should get a commercial back from my backend and we can can always check that by goignto my controller and seeing if we're  sneidng a jsone repsonse back
     }
 } // if I'm editing a perosn I'm goign to need access to some data from React so we pass it in as an arg first and then when we pass the arg again to JSON.stringify(commercial)
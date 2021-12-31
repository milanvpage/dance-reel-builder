// BEST PRATICE with th SET_CONCERT variable
//  export const setConcert = (concert) => ({type SET_CONCERT, payload: concert})
// import {SET_CONCERT, DELETE_CONCERT, ADD_CONCERT } from './ActionCreators'

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
export const addConcert = (concert) => { // take in arg so we have datat for our componet - the datat we're grabbing from our form/ submitting
    // need thunk becasue we're doing async logic - sned POST request 

    return (dispatch) => {
        fetch("http://localhost:3000/concerts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" // these tell my backend what kind of response I want back and what kind of response I'm sending - how I'm sending my data (what kind of language), and what kind of data I'm getting back (what kind of languagae I'm getting back)
            },
            body: JSON.stringify(concert)
        })
        .then(r => r.json()) // parse out response // and I know I set up my backend so that it will send that perosn back directly - so then I can use dispatch and add this to my store
        .then(concert => dispatch({type: "ADD_CONCERT", payload: concert})) // kinda like what I'm doing in my first fetch request up top
    }
}
 // delete concert
 export const deleteConcert = (id) => { // need to pass in id and then interpolate my URL so i can have access to that id
    return (dispatch) => {
        fetch(`http://localhost:3000/concerts/${id}`, {
            method: "DELETE" // AND we don't need any "body" or anything like that becasue we're just sending through the id in the URl

        }) // also need that config object as well here so we cna be able to delete
        .then(r => r.json())// then we can parse out our json response
        // this will sometimes send an error  if we're sneidng through no content and we're not sneding back any json, we can't pass any json out of a repsonse that we're not sending 
        .then(data => dispatch({type: "DELETE_CONCERT", payload: id})) // here I can just delete that perosn by the id that we have up inour URL - I don't even need to pull it from datat because we're not sneidng any data
       // this is whre I'll want ot dispatch nad sned through a payload of id
       }
} 
 // edit concert

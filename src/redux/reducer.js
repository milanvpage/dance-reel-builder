function reducer(state = {
    commercial: [], 
    concert: [], 
    theater: [], 
    loading: false}, 
    action){
    switch (action.type) {
        case "SET_COMMERCIAL":
            
            return {
                ...state,
                commercial: action.payload
            };
        case "SET_THEATER":
            
            return {
                ...state,
                theater: action.payload
            };
        case "SET_CONCERT":
            
            return {
                ...state,
                concert: action.payload
            };
        case "ADD_COMMERCIAL":

            return {
              ...state,
              commercial: [...state.commercial, action.payload] // as long as my payload is directly my commercial object then we're good, it's kind of up to us how we are formatting it - as long as we call our key payload - but let'ssay that my datat was formatted differntly, like action.payload.commercial, it hasa key of commercial then we'd have to write it this way to access our data
            };
        case "DELETE_COMMERCIAL":
            // {type: "DELETE_COMMERCIAL", payload: 10}
            // HOW CNA I use my payload of an id number to remove that commercial from my array and state
            // can filter throigh an array and return all that doesn't match that specific ID 
            const newCommercials = state.commercial.filter(c => c.id !== action.payload) // filter through all our comme5rcials and return the id that does not equal !== my action.payload ( the ID)
            // find my commercial with it's uniqe id - with our delete requests that's what we'll be sneding to our backend delete/commercial/:id
            // SO let's think about sending through an id from my action
            // ACTION PAYLOAD will actually be  like 
            // {type: "DELETE_COMMERCIAL", payload: 10}
            // BECAUSE to delete a person all I really need to know is their id, I don't need to know anything else
            // 
            return {
                //spread state
                ...state,
                commercial: newCommercials // we could have defined the filter logic here, it's just good to keep extra logic separate from our return and leave our return really clean
            }
        case "EDIT_COMMERCIAL":
            // {type: "DELETE_COMMERCIAL", payload: 10}
            // for this one, what I'm expecting is something similar in terms of our delte action object BUT no winstead of an id number we're goign to need that whole commercial object 
            // {type: "EDIT_COMMERCIAL", payload: commercialObj}
            // edit a commercial that already exists in my state BUT not mutate my state 
            // find sepcifc commercial in my state 
            // what do we need to know about the commercial in term of my redux state - how will we be returning our Object here
            // when we're returnig our state here, again we wnat to spread out our original state
            // THEN we're going to be changing our commercial: key which is an array []
            // what are we goignto need to do inside of this array to change one commercial and still retrun all of my commercials 
            // In other words: we don't wnat to remove a commercial from an array edit it and then retun it to the bottom of the page, we want to keep it ezcalty where it is without messign up the order of my array/ how my data is orginally ordered
        default:
            return state;
    }
}

export default reducer

// takes two args state and action 
// usually the action wold be a JS object
// usually use SWITCH statement by convention 
// look at our action type
// default returns state 
// return state or a new state depedning on what we have with our action 
// can assign default/ initial state - state = {}
// need to export to have access to it inside our store/ createStore function/method
// doesn't matter what you name it when it's a defualt export
// doesn't work that way for other exports - kinda like an object (key/value pairs) 
// example our store dunction doesn;t have  name but we can still export default it
// should be good to go with our store here
// first need to spread our state so we don't lose everything that's already in our state "theater", "concert" dance
// want to return new object when returning our state - with the key of what we want to return "commercial:"
// don't need to spread out our old commercial state becasue we'd only be calling this on first load - and this is on first load from my backend so if I spread out my prevouos state in commercial I would be adding on and duplicating my data everytime I load my backend to my server
// so we just want torese our commercial dance (or theater or concert) - reset it to what my backend gives me
// action.payload - grabing our data from backend it here
// implement this into my commercail or theater container so I can have all this show up on the page
// 
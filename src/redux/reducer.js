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
        }
    
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
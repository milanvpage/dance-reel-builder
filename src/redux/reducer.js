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
//

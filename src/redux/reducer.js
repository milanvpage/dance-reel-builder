function reducer(state = {commercial: [], concert: [], theater: [], loading: false}, action){
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
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(thunk))

// if i don't have this last line here where i'm passing in thunk - I cannot pass a dispatch a function I can only pass it objects
// thunk mkae sit possible to pass dispatch a function - like the fetch request callback function we made

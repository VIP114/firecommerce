import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
const composeEnhancers = composeWithDevTools({})

const  initialStore ={
    cartReducer:{

        cartItems:JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}
const store= createStore(rootReducer,initialStore,composeEnhancers())
export default store



// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer ,{},window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store  
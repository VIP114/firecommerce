const initialState={
    cartItems:[]
}
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART': {
            return{
                ...state,
                cartItems : [...state.cartItems,action.payload]
            }
        }
        case 'DELETE_FORM_CART': {
            return{
                ...state,
                cartItems :state.cartItems.filter(obj=>obj.id !== action.payload.id),
                // console.log("check",cartItems)
            }
        }
        default:return state

    }
}
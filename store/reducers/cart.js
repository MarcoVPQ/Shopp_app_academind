import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart"
import CartItem from './../../models/cart-item';
const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action ) => {
    switch(action.type){
        case ADD_TO_CART:
            const { title, price, id } = action.product
            if(state.items[id]){
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [id]: new CartItem(state.items[id].quantity + 1, price, title, state.items[id].sum + price)
                    },
                    totalAmount: state.totalAmount + price
                    
                }
            } 
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: new CartItem(1, price, title, price)
                },
                totalAmount: state.totalAmount + price
            }
        case REMOVE_FROM_CART:
            const currentQTY = state.items[action.id].quantity
            if(currentQTY > 1){
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: new CartItem(
                            state.items[action.id].quantity - 1,
                            state.items[action.id].price,
                            state.items[action.id].title,
                            state.items[action.id].sum - state.items[action.id].price)
                    },
                    totalAmount: state.totalAmount - state.items[action.id].price
                }
            }

            const updatedCartItems = {...state.items}
            const amountToDeduct = updatedCartItems[action.id].price
            delete updatedCartItems[action.id]

            return {
                ...state,
                items: {
                    ...updatedCartItems
                },
                totalAmount: state.totalAmount - amountToDeduct
            }

        default:
            return state
    }
}
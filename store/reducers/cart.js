import { ADD_TO_CART } from "../actions/cart"
import CartItem from './../../models/cart-item';
const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action ) => {
    switch(action.type){
        case ADD_TO_CART:
            const { title, price } = action.product;
            return state.items[action.product.id] 
            ? {
                ...state,
                items: {
                    ...state.items,
                    [action.product.id]: {
                     ...new CartItem([action.product.id] + 1, price, title, price + price)
                    }

                }
            }
            : {
                ...state,
                    items: {
                        ...state.items,
                        [action.product.id]: {
                        ...new CartItem( 1, price, title, price)
                    }
                }
               
            }
        default:
            return state
    }
}
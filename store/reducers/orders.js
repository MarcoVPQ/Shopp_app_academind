import { ADD_ORDER } from './../actions/orders';
import Order from '../../models/order.model'
const initialState = {
    orders: []
}

export default (state = initialState, action ) => {
    console.log(action);
    switch(action.type){
        case ADD_ORDER:
            const order  = new Order(
                new Date().toString(), 
                action.order.items, 
                action.order.totalAmount, 
                new Date())
            return {
                ...state,
                orders: [...state.orders, order]
            }
        default:
            return state
    }
}
import React from 'react'
import { View, Text, FlatList, Button,  StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Fonts from '../../constants/font'
import Colors from '../../constants/colors'
import CartItem from '../../components/shop/CartItem';
import { removeFromCart } from '../../store/actions/cart'
import { addOrder } from '../../store/actions/orders'

const CartScreen = () => {
    const dispatch = useDispatch()
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => { 
        const items = []
        for (const key in state.cart.items) {
            items.push({
                productId: key,
                title: state.cart.items[key].title,
                price: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum : state.cart.items[key].sum
            })
        }

        return items.sort((a,b) => a.productId > b.productId ? 1 : -1 )
    })    
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>{totalAmount.toFixed(2)}</Text></Text>
                <Button 
                title="Order now" 
                color={Colors.accent} 
                disabled={cartItems.length === 0 } 
                onPress={() => dispatch(addOrder(cartItems, totalAmount))}
                />
            </View>
           <FlatList 
            data={cartItems}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
                <CartItem 
                 quantity={itemData.item.quantity} 
                 title={itemData.item.title} 
                 price={itemData.item.price}
                 amount={itemData.item.sum}
                 onRemove={() => dispatch(removeFromCart(itemData.item.productId)) } 
                 />
            )}
           />
        </View>
    )
}

CartScreen.navigationOptions = {
  headerTitle: "Your Cart"
}

const styles = StyleSheet.create({
    screen: {
        margin: 20,
        flex: 1
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        elevation: 5
    },
    summaryText: {
        fontFamily: Fonts.Bold,
        fontSize: 18,
    },
    amount: {
        color: Colors.primary
    }
})

export default CartScreen

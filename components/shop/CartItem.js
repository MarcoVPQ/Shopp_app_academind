import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Fonts from '../../constants/font'

const CartItem = ({ price, quantity, title , amount, onRemove }) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{quantity} </Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.itemData}>
             <Text style={styles.amount}>{amount.toFixed(2)}</Text>
             <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
              <Icon size={23} name="md-trash" color="red" />
             </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: Fonts.Bold,
        fontSize: 16
    },
    amount: {
        fontFamily: Fonts.Bold,
        fontSize: 16
    },
    quantity: {
        fontFamily: Fonts.Regular,
        color: '#888',
        fontSize: 16
    },
    deleteButton: {
        margin: 20
    }
})
export default CartItem

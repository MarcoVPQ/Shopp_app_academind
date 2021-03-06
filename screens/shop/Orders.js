import React from 'react'
import { FlatList , Text} from 'react-native'
import { useSelector } from 'react-redux';
import {MaterialHeaderButtons, Item } from './../../components/ui/headerButton';

const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders)  
    return (
      <FlatList 
       data={orders} 
       keyExtractor={item => item.id}
       renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
       />
    )
}

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Orders",
    headerLeft: (
      <MaterialHeaderButtons>
        <Item 
         title="Cart" 
         iconName="shopping-cart" 
         onPress={() => navData.navigation.toggleDrawer()}
         />
      </MaterialHeaderButtons>
    )
}
}

export default OrdersScreen

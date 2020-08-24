import React from 'react'
import {createStackNavigator,  createDrawerNavigator, createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import ProductsOverview from './../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import CartScreen from './../screens/shop/CartScreen';
import Colors from '../constants/colors';
import Fonts from '../constants/font';
import OrdersScreen from './../screens/shop/Orders';
import Icon from 'react-native-vector-icons/Ionicons'

const defaultNavOptions = {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : '',
      headerBackTitleStyle: {
        fontFamily: Fonts.Regular
      },
      headerTitleStyle: {
        fontFamily: Fonts.Bold
      }
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetails,
    Cart: CartScreen
  }, {
    navigationOptions: {
    drawerIcon: drawerConfig => <Icon name="md-cart" size={23} color={drawerConfig.tintColor} />
  },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen
}, {
  navigationOptions: {
    drawerIcon: drawerConfig => <Icon name="md-list" size={23} color={drawerConfig.tintColor} />
  },
  defaultNavigationOptions: defaultNavOptions
})


const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
})
export default createAppContainer(ShopNavigator);

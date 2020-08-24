import React from 'react';
import { FlatList, HeaderButton } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Product from '../../components/shop/Product.component';
import * as cartActions from '../../store/actions/cart';
import {MaterialHeaderButtons, Item } from './../../components/ui/headerButton';

const ProductsOverview = ({navigation}) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch()
    return  (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <Product
         title={itemData.item.title}
         imageUrl={itemData.item.imageUrl}
         price={itemData.item.price}
         onViewDetail={() => {
             navigation.navigate('ProductDetail', {productId: itemData.item.id, title: itemData.item.title});
         }}
         onAddToCart={() => {
           dispatch(cartActions.addToCart(itemData.item))
         }}
         />
        )}
      />
    )
};

ProductsOverview.navigationOptions = navData => {
  const { navigation } = navData
  return {
    headerTitle: 'All Products',
    headerRight: (
      <MaterialHeaderButtons>
        <Item title="Menu" iconName="shopping-cart" onPress={() => navigation.navigate('Cart')}/>
      </MaterialHeaderButtons>
    ),
      headerLeft: (
      <MaterialHeaderButtons>
        <Item title="Cart" iconName="menu" onPress={() => navigation.toggleDrawer()}/>
      </MaterialHeaderButtons>
    )
}
}

export default ProductsOverview;

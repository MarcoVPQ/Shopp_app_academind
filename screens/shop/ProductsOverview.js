import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Product from '../../components/shop/Product.component';
import * as cartActions from '../../store/actions/cart';

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

ProductsOverview.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverview;

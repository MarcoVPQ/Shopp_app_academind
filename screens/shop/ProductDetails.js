import React from 'react';
import {View, Text, StyleSheet, Button , ScrollView, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import  Colors from '../../constants/colors'
import  Fonts from '../../constants/font'
import * as cartActions from '../../store/actions/cart';

const ProductDetails = ({ navigation }) => {
    const productId = navigation.getParam('productId')
    const product = useSelector(state => state.products.availableProducts.find(p => p.id === productId))
    const dispatch = useDispatch()
    return (
        <ScrollView>
            <Image source={{ uri: product.imageUrl }} style={styles.image}/>
            <View style={styles.actions}>
              <Button title="Add to Cart" onPress={() => {
                  dispatch(cartActions.addToCart(product))
              }} color={Colors.primary} />
            </View>
            <Text style={styles.price}>{product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: Fonts.Bold
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: Fonts.Regular
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    }
})

ProductDetails.navigationOptions = navData => {    
    return { 
        headerTitle: navData.navigation.getParam('title')
    }
}

export default ProductDetails

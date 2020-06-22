import React from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableNativeFeedback} from 'react-native'
import  Colors from '../../constants/colors'
import  Fonts from '../../constants/font'


const Product = ({id, title, imageUrl, price, onViewDetail, onAddToCart}) => {
  return (
      <View style={styles.product}>
        <TouchableNativeFeedback onPress={onViewDetail} useForeground>
        <View>
            <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image}/>
            </View>
            <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button title="View details" onPress={onViewDetail} color={Colors.primary} />
              <Button title="To Cart" onPress={onAddToCart} color={Colors.primary}/>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
  );
}

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 300,
    margin: 20
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: Fonts.Bold,
  },
  price: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: '#888'
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
})

export default Product;

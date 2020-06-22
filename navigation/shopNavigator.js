import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import ProductsOverview from './../screens/shop/ProductsOverview';
import ProductDetails from '../screens/shop/ProductDetails';
import Colors from '../constants/colors';
import Fonts from '../constants/font';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetails,
  },
  {
    defaultNavigationOptions: {
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
    },
  },
);

export default createAppContainer(ProductsNavigator);

import React from 'react'
import { HeaderButton, HeaderButtons } from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../constants/colors'
import { Platform } from 'react-native';

const CustomHeaderButton = props => {
    return <HeaderButton {...props}  iconSize={28} IconComponent={MaterialIcons} color={Platform.OS === 'android' ? '#fff' : Colors.primary} />
}

export const MaterialHeaderButtons = (props) => {
    return <HeaderButtons HeaderButtonComponent={CustomHeaderButton} {...props} />
}

export { Item } from 'react-navigation-header-buttons'
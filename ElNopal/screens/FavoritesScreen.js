import React from 'react';

import {View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButtons, Item, OverflowMenu, HiddenItem} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'

import Layout from '../components/Layout'
import { Header } from 'react-native/Libraries/NewAppScreen';

import {Colors} from '../constants/Colors';

import HeaderImage from '../components/HeaderImage';

const FavoritesScreen = () =>{
    return(
        <Layout>
            <Text>Hello There</Text>
        </Layout>
    )
}

FavoritesScreen.navigationOptions = ({navigation}) =>{
    return{
        headerTitle: () => <HeaderImage/>,
        headerStyle:{
            backgroundColor: Colors.secondary
        },
        headerLeft: () =>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen;
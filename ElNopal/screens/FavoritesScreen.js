import React from 'react';

import {View,Text} from 'react-native';

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
        }
    }
}

export default FavoritesScreen;
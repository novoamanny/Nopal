import React from 'react';

import {View, Text, Image, Platform} from 'react-native';
import Layout from '../components/Layout'

import HeaderImage from '../components/HeaderImage';
import BannerImage from '../components/BannerImage';

import Categories from '../components/Categories';

const StartScreen = ({navigation}) =>{
    
    return(
        <Layout>
            <BannerImage/>
            <Categories navigation={navigation}/>
        </Layout>
        
    )

}

StartScreen.navigationOptions = {
    headerTitle: () => <HeaderImage/>,
    headerStyle:{
        // backgroundColor: Platform.OS === 'android' ? '#00b300' : '#2f2f2f'
        backgroundColor: '#00b300'
    }
    
}

export default StartScreen;
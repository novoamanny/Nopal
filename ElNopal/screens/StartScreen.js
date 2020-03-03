import React from 'react';

import {View, Text, Image} from 'react-native';
import Layout from '../components/Layout'

import HeaderImage from '../components/HeaderImage';
import BannerImage from '../components/BannerImage';

import Categories from '../components/Categories';

const StartScreen = ({navigation}) =>{
    
    return(
        <Layout navigation={navigation}>
            <BannerImage/>
            <Categories/>
        </Layout>
        
    )

}

StartScreen.navigationOptions = {
    headerTitle: () => <HeaderImage/>,
    headerStyle:{
        backgroundColor: '#ff8c1a'
    }
    
}

export default StartScreen;
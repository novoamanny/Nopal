import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {View, Text, Image, Platform} from 'react-native';
import {HeaderButtons, Item, OverflowMenu, HiddenItem} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'
import Layout from '../components/Layout'

import HeaderImage from '../components/HeaderImage';
import BannerImage from '../components/BannerImage';

import {CATEGORIES} from '../data/category-data';
import Categories from '../components/Categories';

const StartScreen = ({navigation}) =>{
    
    return(
        <Layout>
            <BannerImage/>
            <Categories navigation={navigation}/>
        </Layout>
        
    )

}

StartScreen.navigationOptions = ({navigation}) =>{
    return{
        headerTitle: () => <HeaderImage/>,
        headerStyle:{
            // backgroundColor: Platform.OS === 'android' ? '#00b300' : '#2f2f2f'
            backgroundColor: '#00b300'
        },
        
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                {/* <Item iconName='ios-star' onPress={() => console.log('FAV')}/> */}
                <OverflowMenu
                    style={{ marginHorizontal: 10 }}
                    OverflowIcon={<Ionicons name="ios-more" size={23} color="#fff" />}
                >
                     <HiddenItem title="Favorites" onPress={() => navigation.navigate({routeName: 'Favorites'})} />
                    {CATEGORIES.map(item => {
                        return <HiddenItem title={item.title} onPress={() => navigation.navigate('CategoryMenu', {categoryId : item.id})} />
                    })}
                </OverflowMenu>
            </HeaderButtons>
        ),
        headerLeft: () =>(
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        )
    }
    
}

export default StartScreen;
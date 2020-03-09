import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import {Ionicons} from '@expo/vector-icons';

import StartScreen from '../screens/StartScreen';
import CategoryMenuScreen from '../screens/CategoryMenuScreen'
import MenuItemScreen from '../screens/MenuItemScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import {Colors} from '../constants/Colors'


const ElNopalNavigator = createStackNavigator({
    Home: StartScreen,
    CategoryMenu: CategoryMenuScreen,
    MenuItem: MenuItemScreen
    // Test: TestScreen,
    // TestTwo: TestScreenTwo
})

const ElNopalTabs = createBottomTabNavigator({
    ElNopal: {screen: ElNopalNavigator, navigationOptions:{
        tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor}/>
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions:{
        tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={20} color={tabInfo.tintColor}/>
    }},
    
},{
    tabBarOptions:{
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: Colors.secondary,
        activeTintColor: '#fff',
        
    }
}
)


export default createAppContainer(ElNopalTabs);
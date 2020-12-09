import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';

import StartScreen from '../screens/StartScreen';
import CategoryMenuScreen from '../screens/CategoryMenuScreen'
import MenuItemScreen from '../screens/MenuItemScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import {Colors} from '../constants/Colors'

// Navigator Tabs
const ElNopalNavigator = createStackNavigator({
    Home: StartScreen,
    CategoryMenu: CategoryMenuScreen,
    MenuItem: MenuItemScreen
   
})


const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MenuItem: MenuItemScreen
})


// Nvigator Tabs config
const tabsConfig = {
    Nopal: {
        screen: ElNopalNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor}/>
            
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => <Ionicons name='ios-star' size={20} color={tabInfo.tintColor}/>
    }},
}


// Tab Navigattor
const ElNopalTabs = createBottomTabNavigator(
    tabsConfig,
    {
        tabBarOptions:{
            inactiveBackgroundColor: '#fff',
            activeBackgroundColor: Colors.secondary,
            activeTintColor: '#fff',
        },
        // navigationOptions:{
        //     drawerLabel: 'El Nopal'
        // }
    }   
)

const FilterNavigator = createStackNavigator(
    {
   
        Filter:{
            screen: FilterScreen,
        },
    
    },
    // {
    //     navigationOptions:{
    //         drawerLabel: 'Filter'
    //     }
    // }
)

const MainNavigator = createDrawerNavigator({
    NopalNav:{
        screen: ElNopalTabs,
        navigationOptions:{
            drawerLabel: 'El Nopal'
        }
    },
    Filter: {
        screen: FilterNavigator,
        navigationOptions:{
            drawerLabel: 'Filter'
        }
    },
  
},
    {
        contentOptions: {
            activeTintColor: Colors.primary,
            activeBackgroundColor: Colors.secondary,
            
        }
    }
)

export default createAppContainer(MainNavigator);